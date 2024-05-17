const mongoose = require('mongoose')

const ProblemSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  attempts: {
    type: Number,
    default: 1,
  },
})
const LeaderBoardScheme = new mongoose.Schema({
  name: {
    type: String,
    default: 'Unknown',
  },
  email: {
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
})

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
    type: [ProblemSchema],
    default: [],
  },
  leaderBoard: {
    type: [LeaderBoardScheme],
    default: [],
  },
})

const UserModel = mongoose.model('User', UserSchema)
module.exports = UserModel
