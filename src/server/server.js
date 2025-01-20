const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const cors = require('cors');

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

  app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
  });

  //LOGIC
  function checkIfEmailisValid(email){
    if(email.includes("@")){
        return true;
    } else{
        return false;
    }
}