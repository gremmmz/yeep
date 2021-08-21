const express = require('express');
const pool = require('../pool.js');
//创建路由器对象
const r = express.Router();

// 查询有效订单的接口 ****************************
r.get('/paid',(req, res, next)=>{
   let uid = req.query.uid;
   let sql = 'SELECT paid.`pid`,paid.`uid`,paid.`start_date`,paid.`end_date`,house.`title`,house.`address`,house.`pic_1`,house.`price` FROM paid LEFT JOIN house ON paid.`hid`=house.`hid` WHERE uid=?';
   pool.query(sql, [uid], (err, result) => {
      if(err){
         next(err);
         return;
      }
      res.send({ message: 'ok', code: 200, result: result });
   });
});

// 添加有效订单的接口 *****************************
r.post('/paid_add',(req, res, next)=>{
   let uid = req.body.uid;
   let hid = req.body.hid;
   let start_date = req.body.start_date;
   let end_date = req.body.end_date;
   let sql = 'INSERT INTO paid VALUES(NULL,?,?,?,?)';
   pool.query(sql, [uid, hid, start_date, end_date], (err, result) => {
      if(err){
         next(err);
         return;
      }
      res.send({ message: 'ok', code: 200 });
   });
});

// 删除有效订单的接口 ******************************
r.post('/paid_del',(req, res, next)=>{
   let pid = req.body.pid;
   let sql = 'DELETE FROM paid WHERE pid=?';
   pool.query(sql, [pid], (err, result) => {
      if(err){
         next(err);
         return;
      }
      res.send({ message: 'ok', code: 200 });
   });
});


module.exports = r;