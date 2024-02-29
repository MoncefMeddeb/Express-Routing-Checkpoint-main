const express = require('express');
const app = express();
const port = 3000;

// verification
app.use((req, res, next) => {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();

  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next(); 
  } else {
    res.send('The web application is only available during working hours (Monday -> Friday, from 9 -> 17).');
  }
});
app.use(express.static('public'));

// Route handlers
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/Home.html');
  });
  
  app.get('/services', (req, res) => {
    res.sendFile(__dirname + '/public/services.html');
  });
  
  app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
  });
// server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
