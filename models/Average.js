const { Schema, model } = require('mongoose');
const { number } = require('prop-types');

const AverageSchema = new Schema({
  average: {
    type: Number
  },
 
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Average = model('Average', AverageSchema);

module.exports = Average;