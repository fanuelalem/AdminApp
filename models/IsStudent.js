const { Schema, model } = require('mongoose');
const { number } = require('prop-types');

const IsStudentSchema = new Schema({
    isStudent: {
    type: Boolean
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const IsStudent = model('IsStudent', IsStudentSchema);

module.exports = IsStudent;