const mongoose = require('mongoose');
const { isEmail, isLength } = require('validator');
const bcrypt = require('bcryptjs');

const { Schema, model } = mongoose;

const TeacherSchema = new Schema({
  email: {
    type: String,
    unique: true,
    validate: [isEmail, 'Please enter a valid email address'],
    required: [true, 'You must provide an email address'],
  },
  password: {
    type: String,
    required: [true, 'You must provide a password'],
    validate: [(value) => isLength(value, { min: 6 }), 'Your password must be at least 6 characters long'],
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  myTeacherCourses: [{
    type: [Schema.Types.ObjectId],
    ref: 'TeacherCourse',
  }],
  myStudents: [{
    type: [Schema.Types.ObjectId],
    ref: 'Students',
  }]
});

TeacherSchema.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj.password;
  return obj;
};


TeacherSchema.methods.comparePassword = async function (candidatePassword) {
  const teacher = this;
  console.log(this,' this is teacher')
  try {
    const isMatch = await bcrypt.compare(candidatePassword, teacher.password);
    return Promise.resolve(isMatch);
  } catch (e) {
    return Promise.reject(e);
  }
};

TeacherSchema.pre('save', async function (next) {
  // gets access to the user model that is currently being saved
  const teacher = this;
  if (teacher.isModified('password')) {
    try {
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(teacher.password, salt);
      // overwrite the plain text password with our hash
      teacher.password = hash;
      // Finally call save
      next();
    } catch (e) {
      // Call save with an error
      next(e);
    }
  }
  next();
});

module.exports = model('Teacher', TeacherSchema);
