const mongoose = require("mongoose");
const itemSchema = mongoose.Schema(
  {
    title: {
      type: String,
      maxLength: 150,
      required: [true, "Title cannot be blank"],
      validate: {
        validator: function (value) {
          return typeof value === "string";
        },
        message: "Title must be a string",
      },
    },
    category: {
      type: String,
      maxLength: 150,
      required: [true, "Category cannot be blank"],
      validate: {
        validator: function (value) {
          return typeof value === "string";
        },
        message: "Category must be a string",
      },
    },
    link: {
        type: String,
        maxLength: 1000,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    available: {
      type: Boolean,
      required:true,
    },
    rating: {
        type: String,
        required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Item", itemSchema);
