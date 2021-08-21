<template>
  <div class="mov">
    <van-nav-bar title="">
      <template #right>
        <van-icon name="envelop-o" size="18px" color="#797979" class="sett"/>
        <van-icon name="setting-o" class="sett" size="18px" color="#797979"/>
      </template>
    </van-nav-bar>
    <div class="tt">
      <van-button class="tex" size="mini" to="register"><span>注册</span></van-button>
      <van-button class="tex" size="mini" to="login"><span>登录</span></van-button>
      <van-icon name="contact"  size="60px" class="ren" color="#fff"/>
    </div>
    <div class="c1">
      <p class="p1">旅程工具</p> 
      <van-grid direction="horizontal" :column-num="3">
          <van-grid-item icon="friends-o" text="邻里支持" />
          <van-grid-item icon="phone-o" text="获取帮助" />
          <van-grid-item icon="logistics" text="行程" />
      </van-grid>
    </div>
    <div class="c2">
      <p class="p2">成为房东/体验达人</p>
      <van-cell is-link @click="showPopup" class="cel">开展体验</van-cell>
      <van-popup v-model="show">吐血上线中</van-popup>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      selected:'my'
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
</script>


<style scoped>
.mov{
  overflow: hidden;
}
.tt {
  height: 60px;
  margin-top: 40px;
}
.tex {
  border: 0;
  font-size: 18px;
  font-weight: 600;
  line-height: 60px;
  margin-left: 5%;
  margin-top: 20px;
}
.ren {
  border-radius: 50%;
  background-color: #e8dab7;
  float: right;
  margin-right: 5%;
}
.c1 {
  margin: 8% 5% 0 5%;
  border-top: 2px solid #f6f6f6;
  border-bottom: 2px solid #f6f6f6;
}
.p1 {
  font-weight: 600;
  margin-top: 16px;
}
.sett {
  margin-left: 40px;
  margin-top: 30px;
  font-weight: 600;
}
.p2 {
  font-weight: 600;
  margin-left: 5%;
}
.cel {
  margin-left: 1%;
}
.c2 {
  margin-top: 20px;
}
</style>

