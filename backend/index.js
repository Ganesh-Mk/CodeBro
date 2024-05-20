const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')

require('dotenv').config()
const UserModel = require('./models/userModel')
const LeaderBoard = require('./models/leaderBoardModel')

const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

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
app.get('/leaderBoardprint', async (req, res) => {
  try {
    const leaderboard = await LeaderBoard.find()
    return res.send(leaderboard)
  } catch (err) {
    console.error('Error fetching leaderboard entries:', err)
    return res.status(500).send(err.message)
  }
})
app.get('/deleteleaderBoard', async (req, res) => {
  try {
    const result = await LeaderBoard.deleteMany({})
    return res.send({ message: 'All leaderboard entries deleted', result })
  } catch (err) {
    console.error('Error deleting leaderboard entries:', err)
    return res.status(500).send(err.message)
  }
})

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    console.log('req: ', req)
    cb(null, file.originalname || '')
  },
})

const upload = multer({ storage: storage })

app.post('/updateUserDetails', upload.single('image'), async (req, res) => {
  const {
    userEmail,
    userName,
    userPassword,
    userInsta,
    userGithub,
    userLinkedin,
  } = req.body

  const updateData = {
    name: userName,
    email: userEmail,
    password: userPassword,
    insta: userInsta,
    github: userGithub,
    linkedin: userLinkedin,
  }

  if (req.file) {
    updateData.image = req.file.originalname || ''
  }

  await UserModel.findOneAndUpdate({ email: userEmail }, updateData, {
    new: true,
  })
    .then((updatedUser) => {
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' })
      }
      res.status(200).json(updatedUser)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })

  let userImage = req.file === undefined ? '' : req.file.originalname
  await LeaderBoard.findOneAndUpdate(
    { email: userEmail },
    {
      name: userName,
      image: userImage,
      email: userEmail,
      insta: userInsta,
      github: userGithub,
      linkedin: userLinkedin,
    },
    {
      new: true,
    },
  )
})

app.get('/fetchUserImage', (req, res) => {
  const { userEmail } = req.query

  UserModel.findOne({ email: userEmail })
    .then((userModel) => {
      if (!userModel) {
        return res.status(404).json({ error: 'User not found' })
      }
      res.json({ userImage: userModel.image })
    })
    .catch((err) => res.status(500).json({ error: err.message }))
})

app.post('/addProblemRecord', async (req, res) => {
  try {
    const {
      problemObj,
      userEmail,
      userInsta,
      userGithub,
      userLinkedin,
    } = req.body

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

      if (problemObj.language === 'javascript') userModel.jsSolved++
      else if (problemObj.language === 'python') userModel.pythonSolved++
      else if (problemObj.language === 'java') userModel.javaSolved++

      if (!problemUpdated) {
        userModel.totalSolved++
        if (problemObj.difficulty === 'Easy') userModel.easySolved++
        else if (problemObj.difficulty === 'Medium') userModel.mediumSolved++
        else if (problemObj.difficulty === 'Hard') userModel.hardSolved++

        userModel.allProblems.push({
          number: problemObj.number,
          heading: problemObj.heading,
          difficulty: problemObj.difficulty,
          attempts: 1,
        })
      }

      await userModel.save()

      const existingEntry = await LeaderBoard.findOne({ email: userEmail })

      if (existingEntry) {
        existingEntry.total = userModel.totalSolved
        existingEntry.easy = userModel.easySolved
        existingEntry.medium = userModel.mediumSolved
        existingEntry.hard = userModel.hardSolved
        existingEntry.insta = userInsta
        existingEntry.github = userGithub
        existingEntry.linkedin = userLinkedin
        existingEntry.javascript = userModel.jsSolved
        existingEntry.python = userModel.pythonSolved
        existingEntry.java = userModel.javaSolved
        existingEntry.image = userModel.image

        await existingEntry.save()
      } else {
        const newEntry = new LeaderBoard({
          name: userModel.name,
          email: userModel.email,
          total: userModel.totalSolved,
          easy: userModel.easySolved,
          medium: userModel.mediumSolved,
          hard: userModel.hardSolved,
          insta: userInsta,
          github: userGithub,
          linkedin: userLinkedin,
          javascript: userModel.jsSolved,
          python: userModel.pythonSolved,
          java: userModel.javaSolved,
          image: userModel.image,
        })
        await newEntry.save()
      }
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
  UserModel.findOne({ email: req.body.userEmail })
    .then((existingUser) => {
      if (existingUser) {
        res.send(false)
      } else {
        UserModel.create({
          name: req.body.userName,
          email: req.body.userEmail,
          password: req.body.userPassword,
        })
          .then((userModel) => res.send(userModel))
          .catch((err) => res.send(err))
      }
    })
    .catch((err) => res.send(err))
})

PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('listening on port: ' + PORT)
})
