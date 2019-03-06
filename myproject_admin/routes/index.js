var express = require('express');
var router = express.Router();


var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended:false}));
var multiparty = require('multiparty');
/* 导入mysql模块 */
var mysql = require('mysql');
var pool = mysql.createPool({
  host:'localhost',
  port     : 3306,    // 数据库连接的端口号 默认是3306  
  database : 'iview', // 需要查询的数据库  
  user     : 'root',  // 用户名  
  password : 'root'   // 密码，我的密码是空。所以是空字符串  
});                   // 使用DBConfig.js的配置信息创建一个MySQL连接池


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/text', function(req, res, next) {
  res.json({status:200,message:"测试"});
});

module.exports = router;
