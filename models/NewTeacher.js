const { Schema, model } = require('mongoose');
const { number } = require('prop-types');

const NewTeacherSchema = new Schema({
  email: {
    type: String
  },
  courses: {
    type: Array
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const NewTeacher = model('NewTeacher', NewTeacherSchema);

module.exports = NewTeacher;