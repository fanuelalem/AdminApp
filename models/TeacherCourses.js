const { Schema, model } = require('mongoose');
const { number } = require('prop-types');

const TeacherCoursesSchema = new Schema({
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
  teacher: { type: Schema.Types.ObjectId, ref: 'Teacher' },
});

const TeacherCourse = model('TeacherCourse', TeacherCoursesSchema);

module.exports = TeacherCourse;