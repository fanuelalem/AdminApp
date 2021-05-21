const { Schema, model } = require('mongoose');

const StockScema = new Schema({
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Stock = model('Stock', StockScema);

module.exports = Stock;
