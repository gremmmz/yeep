//引入express包
const express = require('express');
//引入连接池模块
const pool = require('../pool.js');
//console.log(pool);
//创建路由器对象
const r = express.Router();

//1.用户注册(post /register)
r.post('/register', (req, res, next) => {
  //1.1获取流传递的数据
  let obj = req.body;
  console.log(obj);
  //1.2验证各项数据是否为空
  if (!obj.user_phone) {
    res.send({ code: 402, msg: '手机号不能为空' });
    return;
  }if (!obj.password) {
    res.send({ code: 403, msg: '密码不能为空' });
    return;
  }
  //1.3执行SQL命令
  pool.query('select * from user where user_phone=? ', [obj.user_phone], (err, result) => {
    if (err) {
      //交给下一个中间件处理
      next(err);
      return;
    }
    console.log(result);
    //查询的结果是数组，如果是空数组说明登录失败，否则登录成功
    //空数组的长度值为0
    if (result.length === 0) {
      //2.3执行SQL命令
      pool.query('insert into user set ?', [obj], (err, result) => {
        if (err) {
          //把错误交给下一个中间件
          next(err);
          //阻止往后执行
          return;
        }
        console.log(result);
        //执行成功
        res.send({ code: 200, msg: '注册成功' });
      });
    } else {
      res.send({ code: 201, msg: '用户已注册' });
    }
  });
});

//2.用户登录(post /login)
r.post('/login', (req, res, next) => {
  //2.1获取流传递的数据
  let obj = req.body;
  console.log(obj);
  //2.2验证各项数据是否为空
  if (!obj.user_phone) {
    res.send({ code: 401, msg: '手机号不能为空' });
    return;
  }
  if (!obj.password) {
    res.send({ code: 402, msg: '密码不能为空' });
    return;
  }
  //2.3执行SQL命令
  pool.query('select * from user where user_phone=? and password=?', [obj.user_phone, obj.password], (err, result) => {
    if (err) {
      //交给下一个中间件处理
      next(err);
      return;
    }
    console.log(result);
    //查询的结果是数组，如果是空数组说明登录失败，否则登录成功
    //空数组的长度值为0
    if (result.length === 0) {
      res.send({ code: 201, msg: '登录失败' });
    } else {
      res.send({ code: 200, msg: '登录成功' });
    }

  });
});

// 3.修改用户名
r.post('/update_uname', (req, res, next) => {
  let uid = req.body.uid;
  let user_name = req.body.user_name;
  let sql = 'UPDATE USER SET user_name=? WHERE uid=?';
  pool.query(sql, [user_name, uid], (err, result)=>{
    if (err) {
      next(err);
      return;
    }
    res.send({ code: 200, msg: 'ok' });
  });
});

// 4.修改密码
r.post('/update_password', (req, res, next) => {
  let uid = req.body.uid;
  let password = req.body.password;
  let sql = 'UPDATE USER SET password=? WHERE uid=?';
  pool.query(sql, [password, uid], (err, result)=>{
    if (err) {
      next(err);
      return;
    }
    res.send({ code: 200, msg: 'ok' });
  });
});

// 5.修改头像
r.post('/update_avatar', (req, res, next) => {
  let uid = req.body.uid;
  let avatar = req.body.avatar;
  let sql = 'UPDATE USER SET avatar=? WHERE uid=?';
  pool.query(sql, [avatar, uid], (err, result)=>{
    if (err) {
      next(err);
      return;
    }
    res.send({ code: 200, msg: 'ok' });
  });
});


//导出路由
module.exports = r;