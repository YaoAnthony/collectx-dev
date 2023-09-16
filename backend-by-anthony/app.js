/* 
  调package环节
*/
var createError = require('http-errors');// error展示
var express = require('express'); //调用express
var path = require('path');  //调用path package
var cookieParser = require('cookie-parser'); // cookie载入
var logger = require('morgan');
var cors = require("cors") //跨域

require('dotenv').config();
const bodyParser = require("body-parser")

const mongoose = require('mongoose'); // 调用mongoose



const mongoString = process.env.DATABASE_URL; 

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
/**
 * 载入route
 */
//此处调用两个route js，一个变量代表一个分支
var indexRouter = require('./routes/index');
var signinRouter = require('./routes/signin');
var signupRouter = require('./routes/signup');
//使用express
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json())
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));//解析网页路径
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter); // 解析网页路径
app.use('/signin', signinRouter); // sign In
app.use('/signup',signupRouter); // signup
//app.use('/signin', signinRouter); // sign In
//app.use('/test', testRouter); // test
// catch 404 and forward to error handler 
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
