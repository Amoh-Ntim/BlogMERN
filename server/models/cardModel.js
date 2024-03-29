const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const YourDataSchema = new Schema({
    url: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
   {timestamps: true,}
  
  );
const YourDataModel = mongoose.model('Blogcard', YourDataSchema);
module.exports = YourDataModel;

