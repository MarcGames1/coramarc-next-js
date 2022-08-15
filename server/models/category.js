const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    content: {},
    Image: {
      type: Object,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);





module.exports = mongoose.model('Category', categorySchema);