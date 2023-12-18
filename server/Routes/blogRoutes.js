const express = require('express');
const YourDataModel = require('../models/cardModel')
const router = express.Router();

router.post('/data', async (req, res) => {
    const newData = new YourDataModel(req.body);
    try {
      await newData.save();
      res.json({ message: 'Data created successfully!' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  router.get('/data', async (req, res) => {
    try {
      const data = await YourDataModel.find({});
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
      res.json({ message: 'Data deleted successfully!' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  module.exports = router;
