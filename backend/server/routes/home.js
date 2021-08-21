const express = require('express');
const pool = require('../pool.js');
//创建路由器对象
const r = express.Router();

//查询所有城市标签的接口 ********************************
r.get('/city', (req, res, next)=>{
   let sql ='SELECT cid,city_name FROM city ORDER BY cid';
   pool.query(sql, (err, result)=>{
      if(err){
         next(err);
         return;
      }
      res.send({ message: 'ok', code: 200, result: result });
   });
});

//分页查询指定城市的打折房源 ********************************
r.get('/discount',(req, res, next)=>{
   // 获取客户端传递的cid,page参数
   let cid = req.query.cid;
   let page = req.query.page? req.query.page : 1;
   // 每页显示的记录数
   let pagesize = 4;
   // 每页从第几条记录开始
   let offset = (page - 1) * pagesize;
   // 存储获取到的总记录数
   let rowcount;
   // 获取指定分类下的文章总数
   let sql = 'SELECT COUNT(hid) AS count FROM house WHERE cid=? AND old_price IS NOT NULL';

   pool.query(sql, [cid], (err, result) => {
      if(err){
         next(err);
         return;
      }
      // 总记录数 和 总页数
      rowcount = result[0].count;
      let pagecount = Math.ceil(rowcount / pagesize);
  
      sql = 'SELECT cid,hid,title,address,price,old_price,pic_1 FROM house WHERE cid=? AND old_price IS NOT NULL LIMIT ?,?';
      pool.query(sql, [cid, offset, pagesize], (err, result) => {
         if(err){
            next(err);
            return;
         }
        res.send({ message: 'ok', code: 200, result: result, pagecount: pagecount });
      });
   });
});


module.exports = r;