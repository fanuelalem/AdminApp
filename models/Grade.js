const { Schema, model } = require('mongoose');
const { number } = require('prop-types');

const GradeSchema = new Schema({
  points: {
    type: Number
  },
  overAllGrade:{
    type: Number
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Grade = model('Grade', GradeSchema);

module.exports = Grade;