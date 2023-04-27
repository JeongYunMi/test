const express = require('express');
const path = require('path');
const app = express();
const route = require('./route.js');
app.set('view engine', 'ejs'); // (1)
app.set('views', path.join(__dirname, 'views')); // (2)
app.use(express.static(path.join(__dirname, 'views')));
app.use('/', route);
// 에러 처리 부분
app.listen(8080, () => {
  console.log('Express App on port 8080!');
});