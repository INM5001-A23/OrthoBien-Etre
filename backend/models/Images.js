import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  image: {
    type: String,
    unique: true,
  },

  mimeType: {
    type: String,
    required: true,
    unique: false,
  },

  codeProduit: {
    type: Number,
    required: true,
    unique: false,
  },
});

export default mongoose.model("Images", imageSchema, "Images");
