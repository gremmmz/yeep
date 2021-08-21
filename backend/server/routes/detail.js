const express = require('express');
const pool = require('../pool.js');
//创建路由器对象
const r = express.Router();

//查询详细信息的接口 ********************************
r.get('/detail',(req, res, next)=>{
   let hid = req.query.hid;
   let sql='SELECT hid,title,address,detail,price,old_price,house_phone,pic_1,pic_2,pic_3 FROM house where hid=?';
   pool.query(sql, [hid], (err, result)=>{
      if(err){
         next(err);
         return;
      }
      res.send({ message: 'ok', code: 200, result: result });
   });
});


module.exports = r;