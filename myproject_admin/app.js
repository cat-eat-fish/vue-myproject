var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  next();
});

// 使用公共文件
// app.all('/', function(req, res){
//   console.log("=======================================");
//   console.log("请求路径："+req.url);
//   var filename = req.url.split('/')[req.url.split('/').length-1];
//   var suffix = req.url.split('.')[req.url.split('.').length-1];
//   console.log("文件名：", filename);
//   if(req.url==='/'){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end(get_file_content(path.join(__dirname, 'html', 'index.html')));
//   }else if(suffix==='css'){
//     res.writeHead(200, {'Content-Type': 'text/css'});
//     res.end(get_file_content(path.join(__dirname, 'public', 'css', filename)));
//   }else if(suffix in ['gif', 'jpeg', 'jpg', 'png']) {
//     res.writeHead(200, {'Content-Type': 'image/'+suffix});
//     res.end(get_file_content(path.join(__dirname, 'public', 'images', filename)));
//   }
// });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
