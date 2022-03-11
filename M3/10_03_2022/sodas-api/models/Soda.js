const { Schema, model } = require('mongoose');

const sodaSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    calories: Number,
    manufactor: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

module.exports = model('Soda', sodaSchema);
