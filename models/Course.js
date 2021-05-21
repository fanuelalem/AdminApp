const { Schema, model } = require('mongoose');
const { number } = require('prop-types');

const CourseSchema = new Schema({
  subject: {
    type: String
  },
  route:{
      type: String
  },
  
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Course = model('Course', CourseSchema);

module.exports = Course;