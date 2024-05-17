const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

require('dotenv').config()
const UserModel = require('./models/userModel')

const app = express()
app.use(express.json())
app.use(bodyParser.json())
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
      userModel.save()
      res.send(userModel)
    })
    .catch((err) => res.send(err))
})

app.post('/addProblemRecord', async (req, res) => {
  try {
    const { problemObj, userEmail } = req.body

    if (!problemObj || !userEmail) {
      return res
        .status(400)
        .send('Missing problemObj or userEmail in request body')
    }

    const userModel = await UserModel.findOne({ email: userEmail })

    if (userModel) {
      let problemUpdated = false

      for (let i = 0; i < userModel.allProblems.length; i++) {
        if (userModel.allProblems[i].number === problemObj.number) {
          userModel.allProblems[i].attempts += 1
          problemUpdated = true
          break
        }
      }

      if (!problemUpdated) {
        userModel.totalSolved++
        if (problemObj.difficulty === 'Easy') userModel.easySolved++
        else if (problemObj.difficulty === 'Medium') userModel.mediumSolved++
        else if (problemObj.difficulty === 'Hard') userModel.hardSolved++

        if (problemObj.language === 'javascript') userModel.jsSolved++
        else if (problemObj.language === 'python') userModel.pythonSolved++
        else if (problemObj.language === 'java') userModel.javaSolved++

        userModel.allProblems.push({
          number: problemObj.number,
          heading: problemObj.heading,
          difficulty: problemObj.difficulty,
          attempts: 1,
        })
      }

      await userModel.save()
      res.sendStatus(200)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    console.error('Error in updating problem record:', err)
    res.status(500).send(err.message)
  }
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
