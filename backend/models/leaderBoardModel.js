const mongoose = require('mongoose')

const LeaderBoardSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'Unknown',
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    default: '',
  },
  total: {
    type: Number,
    default: 0,
  },
  easy: {
    type: Number,
    default: 0,
  },
  medium: {
    type: Number,
    default: 0,
  },
  hard: {
    type: Number,
    default: 0,
  },
  insta: {
    type: String,
    default: '',
  },
  github: {
    type: String,
    default: '',
  },
  linkedin: {
    type: String,
    default: '',
  },
  javascript: {
    type: Number,
    default: 0,
  },
  python: {
    type: Number,
    default: 0,
  },
  java: {
    type: Number,
    default: 0,
  },
})

const LeaderBoard = mongoose.model('LeaderBoard', LeaderBoardSchema)
module.exports = LeaderBoard
