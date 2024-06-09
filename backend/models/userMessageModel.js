const mongoose = require('mongoose')

const UserMessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
})

const UserMessageModel = mongoose.model('UserMessage', UserMessageSchema)
module.exports = UserMessageModel
