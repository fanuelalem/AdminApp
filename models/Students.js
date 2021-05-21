const { Schema, model } = require('mongoose');
const { number } = require('prop-types');

const StudentSchema = new Schema({
  email: {
    type: String
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Student = model('Student', StudentSchema);

module.exports = Student;