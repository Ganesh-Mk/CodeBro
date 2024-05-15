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

app.get('/deleteAllProblem', (req, res) => {
  UserModel.find({ email: 'me@' })
    .then((userModel) => {
      userModel.allProblems = []
      res.send(userModel)
    })
    .catch((err) => res.send(err))
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

app.get('/problemRecord', (req, res) => {
  UserModel.findOne({ email: req.query.userEmail })
    .then((userModel) => {
      res.send(userModel)
    })
    .catch((err) => res.send(err))
})

app.post('/problemRecord', (req, res) => {
  let problemObj = req.body.problemObj
  let isAlreadySolved = false

  UserModel.findOneAndUpdate({ email: req.body.userEmail })
    .then((userModel) => {
      if (userModel) {
        userModel.allProblems.map((problem) => {
          if (problem.number === problemObj.number) {
            isAlreadySolved = true
          }
        })

        if (!isAlreadySolved) {
          userModel.totalSolved = userModel.totalSolved + 1
          if (problemObj.difficulty === 'Easy') {
            userModel.easySolved = userModel.easySolved + 1
          } else if (problemObj.difficulty === 'Medium') {
            userModel.mediumSolved = userModel.mediumSolved + 1
          } else if (problemObj.difficulty === 'Hard') {
            userModel.hardSolved = userModel.hardSolved + 1
          }

          if (problemObj.language === 'javascript') {
            userModel.jsSolved = userModel.jsSolved + 1
          } else if (problemObj.language === 'python') {
            userModel.pythonSolved = userModel.pythonSolved + 1
          } else if (problemObj.language === 'java') {
            userModel.javaSolved = userModel.javaSolved + 1
          }

          let curProblemObj = {
            number: problemObj.number,
            heading: problemObj.heading,
            difficulty: problemObj.difficulty,
            attempts: problemObj.attempts,
          }

          userModel.allProblems.push(curProblemObj)
        } else {
          userModel.allProblems.map((problem) => {
            if (problem.number === problemObj.number) {
              problem.attempts = problem.attempts + 1
            }
          })
        }

        isAlreadySolved = false
        userModel.save()
      }
    })
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
