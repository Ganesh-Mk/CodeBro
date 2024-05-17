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
})

const LeaderBoard = mongoose.model('LeaderBoard', LeaderBoardSchema)
module.exports = LeaderBoard
