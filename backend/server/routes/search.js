const express = require('express');
const pool = require('../pool.js');
//创建路由器对象
const r = express.Router();

// 分页查询指定城市的所有房源的接口 *****************************
r.get('/city_screen',(req, res, next)=>{
   // 获取客户端传递的cid,page参数
   let cid = req.query.cid;
   let page = req.query.page? req.query.page : 1;
   // 每页显示的记录数
   let pagesize = 10;
   // 每页从第几条记录开始
   let offset = (page - 1) * pagesize;
   // 存储获取到的总记录数
   let rowcount;
   // 获取指定分类下的文章总数
   let sql = 'SELECT COUNT(hid) AS count FROM house WHERE cid=?';

   pool.query(sql, [cid], (err, result) => {
      if(err){
         next(err);
         return;
      }
      // 总记录数 和 总页数
      rowcount = result[0].count;
      let pagecount = Math.ceil(rowcount / pagesize);

      sql = 'SELECT hid,cid,title,address,price,old_price,pic_1 FROM house WHERE cid=? LIMIT ?,?';
      pool.query(sql, [cid, offset, pagesize], (err, result) => {
         if(err){
            next(err);
            return;
         }
         res.send({ message: 'ok', code: 200, result: result, pagecount: pagecount });
      });
   });
});

// 分页查询指定城市指定价格范围内的房源 ***************************
r.get('/price_screen',(req, res, next)=>{
   // 获取客户端传递的cid,page参数
   let cid = req.query.cid;
   let start = req.query.start;
   let end = req.query.end;
   let page = req.query.page? req.query.page : 1;
   // 每页显示的记录数
   let pagesize = 10;
   // 每页从第几条记录开始
   let offset = (page - 1) * pagesize;
   // 存储获取到的总记录数
   let rowcount;
   // 获取指定分类下的文章总数
   let sql = 'SELECT COUNT(hid) AS count FROM house WHERE cid=? AND price BETWEEN ? AND ?';

   pool.query(sql, [cid, start, end], (err, result) => {
      if(err){
         next(err);
         return;
      }
      // 总记录数 和 总页数
      rowcount = result[0].count;
      let pagecount = Math.ceil(rowcount / pagesize);

      sql = 'SELECT hid,title,address,price,pic_1,pic_2,pic_3 FROM house WHERE cid=? AND price BETWEEN ? AND ? LIMIT ?,?';
      pool.query(sql, [cid, start, end, offset, pagesize], (err, result) => {
         if(err){
            next(err);
            return;
         }
         res.send({ message: 'ok', code: 200, result: result, pagecount: pagecount });
      });
   });
});

// 搜索框模糊查询地址 ************************
r.get('/search',(req, res, next)=>{
   let content = req.query.content;
   let page = req.query.page? req.query.page : 1;
   // 每页显示的记录数
   let pagesize = 10;
   // 每页从第几条记录开始
   let offset = (page - 1) * pagesize;
   // 存储获取到的总记录数
   let rowcount;
   // 获取指定分类下的文章总数
   let sql = 'SELECT COUNT(hid) AS count FROM house WHERE address LIKE "%?%" ';

   pool.query(sql, [content], (err, result) => {
      if(err){
         next(err);
         return;
      }
      // 总记录数 和 总页数
      rowcount = result[0].count;
      let pagecount = Math.ceil(rowcount / pagesize);

      sql = 'SELECT hid,title,address,price,pic_1,pic_2,pic_3 FROM house WHERE address LIKE "%?%" LIMIT ?,?';
      pool.query(sql, [content, offset, pagesize], (err, result) => {
         if(err){
            next(err);
            return;
         }
         res.send({ message: 'ok', code: 200, content: content,result: result, pagecount: pagecount });
      });
   });
});


module.exports = r;