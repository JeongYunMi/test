const express = require('express');


const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/../views/test.html');
});//대문

router.get('/ruru', (req, res, next) => {
  res.sendFile(__dirname + '/../views/index.html');
});//대문


module.exports = router;