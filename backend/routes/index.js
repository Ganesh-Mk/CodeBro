var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

// Handle POST request for code submission
router.post('/submit-code', function (req, res, next) {
  const { code } = req.body
  // Logic to compile and execute the code goes here
  // Send back the result (output, errors, etc.) to the frontend
  const output = 'Output from server' // Example output
  res.send({ output })
})

module.exports = router
