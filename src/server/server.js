import express from "express";
import cors from "cors";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { checkIfEmailisValid } from './logic/logicFun.js';
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({ origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'],
  credentials: true }));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the server! Use the /contact endpoint for API requests.');
});


app.post('/contact', async (req, res) => {
  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ message: "Email or message is missing" });
  }

  if (!checkIfEmailisValid(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  const data = { email, message };
  const filePath = path.resolve(__dirname, './static/messages.json');

  try {
    let messages = [];

    try {
      const fileData = await fs.readFile(filePath, 'utf8');
      messages = JSON.parse(fileData);
    } catch (parseError) {
      return res.status(500).json({ message: 'Failed to parse data file' });
    }

    messages.push(data);

    await fs.writeFile(filePath, JSON.stringify(messages, null, 2), 'utf8');

    res.status(200).json({ message: 'Data saved successfully' });

  } catch (error) {
    console.error("Error writing to file:", error);
    res.status(500).json({ message: 'Failed to save data' });
  }
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

    if (searchInput == "" && filterValue.length == 0) {
      return res.status(200).json(data.cards)
    }

   if (searchInput == ""){
    searchInput = "pseudoInput";
   }

   console.log("Searchinpuuut: ", searchInput);

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


