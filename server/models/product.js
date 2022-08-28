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

    discount: {
      type: Number,
      trim: true,
    },

    color: {
      name: String,
      hex: String,
      size: [
        {
          type: Number,
          quantity: Number,
        },
      ],
      

      Image: {
        type: Object,
      },
    },

    category: {
      type: ObjectId,
      ref: 'Category',
      required: true,
    },

    content: {},
  },
  { timestamps: true }
);





module.exports = mongoose.model('Product', productSchema);