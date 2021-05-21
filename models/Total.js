const { Schema, model } = require('mongoose');
const { number } = require('prop-types');

const TotalSchema = new Schema({
  points: {
    type: Number
  },
  
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Total = model('Total', TotalSchema);

module.exports = Total;