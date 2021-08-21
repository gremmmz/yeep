<template>
  <div class="message">
    <h2>收件箱</h2>
    <van-divider   :style="{borderColor: 'darkgray', padding: '2% 0' }"/>
    <h4>请登录以查看消息</h4>
    <p>登录后，你将会在这里找到来自房东或体验达人的消息</p>
    <img src="../assets/bannerE.png" alt="">
    <van-button class="btn" to="./login">登录</van-button>
  </div>
</template>

<style scoped>
.message{
  margin: 20% 10%;
}
.message img{
width: 100%;
}
.message p{
  font-size: 12px;
  color:dimgrey;
}
.message .btn{
  width: 100px;
  height: 48px;
  color: #ffffff;
  border-radius: 12px;
  background-color: #D23656;
}
</style>

<script>
export default {
// // name:'Message1',
//   props: {
//     msg: String
//   }
}
</script>

