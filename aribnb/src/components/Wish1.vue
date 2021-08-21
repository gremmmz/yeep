<template>
  <div class="wish">
    <h2>心愿单</h2>
    <van-divider   :style="{borderColor: 'darkgray', padding: '2% 0' }"/>
    <p>点击下方 [登录] 按钮登录爱彼迎，在浏览时轻点心型图标，收藏您喜欢的房源或体验。</p>
    <img src="../assets/bannerF.png" alt="">
    <van-button class="btn" to="./login">登录</van-button>
  </div>
</template>
<style scoped>
.wish{
  margin: 20% 10%;
}
.wish img{
width: 100%;
}
.wish p{
  font-size: 12px;
  color:dimgrey;
}
.wish .btn{
  width: 100px;
  height: 48px;
  color: #ffffff;
  border-radius: 12px;
  background-color: #D23656;
  margin-top: 20px;
}
</style>


