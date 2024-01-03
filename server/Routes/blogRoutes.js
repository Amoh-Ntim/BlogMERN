const express = require('express');
const YourDataModel = require('../models/cardModel')
const router = express.Router();

router.post('/data', async (req, res) => {
  try {
    const { title, author, publishYear, url } = req.body;

    // Create a new post using your model and database
    const post = new YourDataModel({ title, author, publishYear, url }); // Use YourDataModel
    await post.save();
    res.json({ message: 'Post created successfully!' }); // Use res.json directly
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

  router.get('/data', async (req, res) => {
    try {
      const data = await YourDataModel.find();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  router.put('/data/:id', async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    try {
      await YourDataModel.findByIdAndUpdate(id, newData);
      res.json({ message: 'Data updated successfully!' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  router.delete('/data/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await YourDataModel.findByIdAndDelete(id);
      res.status(200).json({ message: 'Data deleted successfully!' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  module.exports = router;
