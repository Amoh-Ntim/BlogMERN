const express = require('express');

const app = express();

app.use(express.json()); // Parse incoming JSON data

// ... Define your routes for CRUD operations ...

const mongoose = require('mongoose');

const uri = 'mongodb+srv://amohntim123:blog@cluster0.g9owpev.mongodb.net/blog?retryWrites=true&w=majority'; // Replace with your details

mongoose.connect(uri)
  .then(() => {console.log('Connected to MongoDB!');
  app.listen(5000, () => {console.log('Server is listening on port 5000')});
})
  .catch(err => console.error('Error connecting to MongoDB:', err));

