<template>
    <div>
        <!-- 导航栏 -->
        <van-nav-bar title="">
            <template #left>
                <router-link to="/my">
                    <van-icon name="arrow-left" class="sett" size="18px" color="#444444"/>
                </router-link>   
            </template>
        </van-nav-bar>
        <!-- 内容 -->
        <div class="tit">
            <div class="message">
            <span>Hi 一一</span><br>
            </div>
         
            <van-image
            round
            width="100"
            height="100"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
        </div>

        <van-divider />

        <div class="hhh">
            <h1>一一已确认</h1>
            <van-icon name="passed" color="#A3C4C2"/>
            <span>手机号</span>
        </div>
    </div>
</template>
<style scoped>
.tit {
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
}
.tit .message {
  width: 65%;
  float: left;
  padding-top: 30px;
  padding-left: 10px;
  line-height: 200%;
}
.message span{
    font-size: 30px;
    font-weight: 400;
}
.hhh{
    margin-left: 5%;
}
.hhh h1{
    font-size: 18px;
    font-weight: 600;
    line-height: 400%;
}
</style>
