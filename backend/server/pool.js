//引入mysql模块
const mysql=require('mysql');
//创建连接池对象
const pool=mysql.createPool({
  host: '127.0.0.1', 
  port: '3306',
  user: 'root',
  password: '',
  database: 'ihs',      //数据库名称
  connectionLimit: 15,  //最大连接数
  charset: 'utf8'
});
//导出连接池
module.exports=pool;