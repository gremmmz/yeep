<template>
    <div>
      <router-link to="/popup">
        <van-nav-bar title="">
        <template #right>
            <van-icon name="setting-o" class="sett" size="18px" color="#797979"/>
        </template>
        </van-nav-bar>
      </router-link>
        
        <div class="tit">
            <div class="message">
            <span class="s3">Hi 一一</span><br>
            <router-link to="/Profile">
              <span class="s4">查看并编辑个人资料</span> 
            </router-link>
            </div>
         
            <van-image
            round
            width="100"
            height="100"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
        </div>
        
        <!-- <div class="gam">
          <van-icon name="gem" color="#fff" size="30" class="gsm"/>
          <router-link to="/arr" >解锁权益</router-link>
          <div class="gold">
          <span class="s3">会员中心</span><br>
          <span class="s4">缤纷福利一触即发</span>
          <van-icon name="arrow" />
          </div>
        </div> -->

        <div class="gid">
        <div>
          <p>我的房源订单</p>
          <van-grid :column-num="3"> 
            <van-grid-item icon="records" text="全部订单" />
            <van-grid-item icon="todo-list-o" to="/arr" text="有效订单" />
            <van-grid-item icon="balance-list-o" text="待支付订单" />
          </van-grid>
        </div>
        <div>
          <p>礼券中心</p>
          <van-grid :column-num="3"> 
            <van-grid-item icon="balance-pay" text="礼金券" />
            <van-grid-item icon="point-gift-o" text="邀请好友得30¥人民币" />
            <van-grid-item icon="gift-card-o" text="好友助力赢¥66直减券" />
          </van-grid>
        </div>
        <div>
          <p>旅程工具</p>
          <van-grid direction="horizontal" :column-num="3">
            <van-grid-item icon="friends-o" text="邻里支持" />
            <van-grid-item icon="phone-o" text="获取帮助" />
            <van-grid-item icon="logistics" text="行程" />
          </van-grid>
        </div>
        </div>
    </div>
</template>

<script>
 import { mapState } from "vuex"

export default {
  data(){
    return{

    }
  }
};
</script>

<style scoped>
.tit .message {
  width: 65%;
  float: left;
  padding-top: 30px;
  padding-left: 10px;
  line-height: 200%;
}
.message .s3{
  font-size: 22px;
  font-weight: 600;
}
.message .s4{
  color: #36948A;
}
.sett {
  margin-left: 50px;
  margin-right: 5px;
  margin-top: 30px;
  font-weight: 600;
}
.tit {
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10%;
}
.gid p{
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
  margin-left: 5%;
}
.gid{
  margin-top: 15%;
}


</style>
