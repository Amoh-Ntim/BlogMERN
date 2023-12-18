const Schema = mongoose.Schema;

const YourDataSchema = new Schema({
  // Define your data fields with types (e.g., String, Number, Boolean)
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
  {
    timestamps: true,
});

const YourDataModel = mongoose.model('Blogcard', YourDataSchema);
