const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const UserModel = require('./models/userModel')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/CodeBro')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/allUserDetails', (req, res) => {
  UserModel.find()
    .then((userModel) => res.send(userModel))
    .catch((err) => res.send(err))
})

app.get('/deleteOneUser/:id', (req, res) => {
  UserModel.findByIdAndDelete(req.params.id)
    .then((userModel) => res.send(userModel))
    .catch((err) => res.send(err))
})

app.get('/deleteAllUser', (req, res) => {
  UserModel.deleteMany()
    .then((userModel) => res.send(userModel))
    .catch((err) => res.send(err))
})

app.post('/login', (req, res) => {
  UserModel.findOne({
    email: req.body.userEmail,
    password: req.body.userPassword,
  })
    .then((userModel) => {
      if (userModel) {
        if (
          userModel.email === req.body.userEmail &&
          userModel.password === req.body.userPassword
        ) {
          res.send(userModel)
        } else {
          res.send(false)
        }
      } else {
        res.send(false)
      }
    })
    .catch((err) => res.send(err))
})

app.post('/createUser', (req, res) => {
  UserModel.create({
    name: req.body.userName,
    email: req.body.userEmail,
    password: req.body.userPassword,
  })
    .then((userModel) => res.send(userModel))
    .catch((err) => res.send(err))
})

PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('listening on port: ' + PORT)
})
