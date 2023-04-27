const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');



const pageRouter = require('./routes/page');
const app = express();



app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(morgan('dev'));


app.use('/', pageRouter);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});

