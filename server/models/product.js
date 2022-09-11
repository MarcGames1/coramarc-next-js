const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
      maxlength: 32,
    },
    discountedPrice: { type: Number, trim: true, default: NaN },

    color: {
      type: ObjectId,
      ref: 'Color',
      required: true,
    },
    codIntern: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    size: {
      nr: {
        type: Number,
        trim: true,
        maxlength: 2,
        required: true,
      },
      cm: {
        type: Number,
        trim: true,
        maxlength: 3,
      },
    },
    image: [
      {
        type: String,
      },
    ],
    category: [
      {
        type: ObjectId,
        ref: 'Category',
        required: true,
      },
    ],

    content: { type: String, trim: true },
  },
  { timestamps: true }
);





module.exports = mongoose.model('Product', productSchema);