const express = require('express');
const pool = require('../pool.js');
//创建路由器对象
const r = express.Router();

// 查询心愿单的接口 ****************************
r.get('/collect',(req, res, next)=>{
   let uid = req.query.uid;
   let page = req.query.page? req.query.page : 1;
   // 每页显示的记录数
   let pagesize = 10;
   // 每页从第几条记录开始
   let offset = (page - 1) * pagesize;
   // 存储获取到的总记录数
   let rowcount;
   // 获取指定分类下的文章总数
   let sql = 'SELECT COUNT(hid) AS count FROM house_collect WHERE uid=?';

   pool.query(sql, [uid], (err, result) => {
      if(err){
         next(err);
         return;
      }
      // 总记录数 和 总页数
      rowcount = result[0].count;
      let pagecount = Math.ceil(rowcount / pagesize);

      sql = 'SELECT house_collect.hcid,house_collect.uid,house_collect.hid,title,address,price,old_price,pic_1 FROM house_collect LEFT JOIN house ON house_collect.hid=house.hid WHERE uid=? LIMIT ?,?';
      pool.query(sql, [uid, offset, pagesize], (err, result) => {
         if(err){
            next(err);
            return;
         }
         res.send({ message: 'ok', code: 200, result: result, pagecount: pagecount });
      });
   });
});

// 添加收藏的接口 *****************************
r.post('/collect_add',(req, res, next)=>{
   let uid = req.body.uid;
   let hid = req.body.hid;
   let sql = 'INSERT INTO house_collect VALUES(NULL,?,?)';
   pool.query(sql, [uid, hid], (err, result) => {
      if(err){
         next(err);
         return;
      }
      res.send({ message: 'ok', code: 200 });
   });
});

// 取消收藏的接口 ******************************
r.post('/collect_del',(req, res, next)=>{
   let hcid = req.body.hcid;
   let sql = 'DELETE FROM house_collect WHERE hcid=?';
   pool.query(sql, [hcid], (err, result) => {
      if(err){
         next(err);
         return;
      }
      res.send({ message: 'ok', code: 200 });
   });
});


module.exports = r;