import express from "express";
import cors from "cors";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { checkIfEmailisValid } from './logic/logicFun.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the server! Use the /contact endpoint for API requests.');
});


app.post('/contact', (req, res) => {
  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ message: "Email or message is missing" });
  }

  if (!checkIfEmailisValid(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  const data = { email, message };
  const filePath = path.resolve(__dirname, './static/messages.json');

  fs.readFile(filePath, 'utf8', (err, fileData) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to read data file' });
    }
    let messages = [];
    if (fileData) {
      try {
        messages = JSON.parse(fileData);
      } catch (parseError) {
        return res.status(500).json({ message: 'Failed to parse data file' });
      }
    }

    messages.push(data);
    fs.writeFile(filePath, JSON.stringify(messages, null, 2), 'utf8', (writeError) => {
      if (writeError) {
        return res.status(500).json({ message: 'Failed to save data' });
      }

      res.status(200).json({ message: 'Data saved successfully' });
    });
  });
});

app.post('/mywork', async (req, res) => {
  let { searchInput, filterValue } = req.body;
  console.log(req.body)

  const filePath = path.resolve(__dirname, "../client/static/Card.json");

  console.log("SERVEr:", searchInput);
  console.log("FiltaerValue:", filterValue);

  try {
    const fileData = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(fileData)

    console.log("FilterValueLength", filterValue.length);

    if (searchInput == "" && filterValue.length == 0) {
      return res.status(200).json(data.cards)
    }

   if (searchInput == ""){
    searchInput = "pseudoInput";
   }

   console.log("Searchinpuuut: ", searchInput);
   console.log("Filter[0]: ", filterValue[0]);

    const filteredCards = data.cards.filter(card =>
      card.header.toLowerCase().includes(searchInput.toLowerCase()) ||
      card.body.toLowerCase().includes(searchInput.toLowerCase()) ||
      card.filter == filterValue[0] ||
      card.filter == filterValue[1]
    );

    console.log("FilteredCards:", filteredCards);

    res.status(200).json(filteredCards);

  } catch (error) {
    console.error("Error reading the card file:", error);
    return res.status(500).json({ message: "Failed to load card data" });
  }

});


app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});


