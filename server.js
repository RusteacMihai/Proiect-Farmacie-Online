const express = require('express');
const cors = require('cors');

const app = express();

// Setează regulile CORS
const corsOptions = {
  origin: 'https://rusteacmihai.github.io/Proiect-Farmacie-Online/', // înlocuiește cu domeniul tău
  methods: 'GET,POST',
};

// Aplică middleware-ul cors cu opțiunile specificate
app.use(cors(corsOptions));

// Restul configurației și rutelor serverului Express

// Pornirea serverului
app.listen(3002, () => {
  console.log('Serverul a pornit pe portul 3002');
});
