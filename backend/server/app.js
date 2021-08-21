const express=require('express');
//引入body-parser
const bodyParser=require('body-parser');
//引入用户路由器
const userRouter=require('./routes/user.js');
const homeRouter=require('./routes/home.js');
const detailRouter=require('./routes/detail.js');
const searchRouter=require('./routes/search.js');
const collectRouter=require('./routes/collect.js');
const historyRouter=require('./routes/history.js');
const inboxRouter=require('./routes/inbox.js');
const paidRouter=require('./routes/paid.js');
//console.log(userRouter);
const app=express();
// 加载CORS模块
const cors = require('cors');

// 使用CORS中间件
app.use(cors({
  origin: ['http://localhost:8080', 'http://127.0.0.1:8080']
}));
app.listen(3000);

//应用body-parser中间件将流请求的数据解析为对象
app.use( bodyParser.urlencoded({
  extended:false
}) );
//应用路由器，添加前缀/v1/user
// /v1/user/register
app.use( '/v1',userRouter );
app.use( '/v1',homeRouter );
app.use( '/v1',detailRouter );
app.use( '/v1',searchRouter );
app.use( '/v1',collectRouter );
app.use( '/v1',historyRouter );
app.use( '/v1',inboxRouter );
app.use( '/v1',paidRouter );
//错误处理中间件
//要拦截所有产生错误
app.use( (err,req,res,next)=>{
  //err 接收的错误
  console.log(err);
  res.send({code:500,msg:'服务器端错误'});
} );