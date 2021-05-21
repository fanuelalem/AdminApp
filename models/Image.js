const { Schema, model } = require('mongoose');

const ImageSchema = new Schema({
  fileName: {
    type: String
  },
  filePath: {
      type:String
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Image = model('Image', ImageSchema);

module.exports = Image;