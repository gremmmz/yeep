const express = require('express');
const pool = require('../pool.js');
//创建路由器对象
const r = express.Router();

// 查询消息的接口 ****************************
r.get('/inbox',(req, res, next)=>{
   let uid = req.query.uid;
   let sql = 'SELECT mid,msg FROM inbox WHERE uid=?';
   pool.query(sql, [uid], (err, result) => {
      if(err){
         next(err);
         return;
      }
      res.send({ message: 'ok', code: 200, result: result });
   });
});

// 添加消息的接口 *****************************
r.post('/inbox_add',(req, res, next)=>{
   let uid = req.body.uid;
   let msg = req.body.msg;
   let sql = 'INSERT INTO inbox VALUES(NULL,?,?)';
   pool.query(sql, [uid, msg], (err, result) => {
      if(err){
         next(err);
         return;
      }
      res.send({ message: 'ok', code: 200 });
   });
});

// 删除消息的接口 ******************************
r.post('/inbox_del',(req, res, next)=>{
   let mid = req.body.mid;
   let sql = 'DELETE FROM inbox WHERE mid=?';
   pool.query(sql, [mid], (err, result) => {
      if(err){
         next(err);
         return;
      }
      res.send({ message: 'ok', code: 200 });
   });
});


module.exports = r;