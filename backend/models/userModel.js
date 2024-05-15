const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  totalSolved: {
    type: Number,
    default: 0,
  },
  easySolved: {
    type: Number,
    default: 0,
  },
  mediumSolved: {
    type: Number,
    default: 0,
  },
  hardSolved: {
    type: Number,
    default: 0,
  },
  jsSolved: {
    type: Number,
    default: 0,
  },
  pythonSolved: {
    type: Number,
    default: 0,
  },
  javaSolved: {
    type: Number,
    default: 0,
  },
  allProblems: {
    type: Array,
    default: [],
  },
})

const UserModel = mongoose.model('User', UserSchema)
module.exports = UserModel
