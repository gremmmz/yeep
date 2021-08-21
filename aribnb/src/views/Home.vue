<template>
  <div class="home">
    <div id="banner">
      <mt-swipe :auto="4000">
        <mt-swipe-item
          ><img
            src="https://z1.muscache.cn/im/pictures/miso/Hosting-49231453/original/22a60fa1-a2a5-4692-a546-27bc14f9be17.jpeg?aki_policy=large"
            alt=""
        /></mt-swipe-item>
        <mt-swipe-item
          ><img
            src="https://z1.muscache.cn/im/pictures/miso/Hosting-48686221/original/4a6b58a1-90e6-4e04-9513-846ba1337b1e.jpeg?aki_policy=large"
            alt=""
        /></mt-swipe-item>
        <mt-swipe-item
          ><img
            src="https://z1.muscache.cn/im/pictures/61642749-0aa8-4b56-a245-f3131c2e9811.jpg?aki_policy=large"
            alt=""
        /></mt-swipe-item>
        <mt-swipe-item
          ><img
            src="https://z1.muscache.cn/im/pictures/miso/Hosting-48686221/original/4a6b58a1-90e6-4e04-9513-846ba1337b1e.jpeg?aki_policy=large"
            alt=""
        /></mt-swipe-item>
      </mt-swipe>
    </div>

    <div class="conter">
      <div class="tab">
        <div class="taber">
          <van-tabs
            v-model="active"
            sticky
            title-active-color="#158489"
            color="white"
            swipeable
          >
            <van-tab title="国内" title-style="font-size:18px;font-weight:600;">
              <p class="cq">重庆</p>
              <div class="dayer">
                <van-cell
                  :title="date"
                  :value="`共${day}晚`"
                  @click="show = true"
                />

                <van-calendar
                  v-model="show"
                  type="range"
                  @confirm="onConfirm"
                  color="#158489"
                  
                />
              </div>
              <van-search
                v-model="value"
                placeholder="景区/地点/房源名"
                left-icon=""
              />
              <router-link to="/search">
                <van-button class="btn">搜索房源</van-button>
              </router-link>
            </van-tab>

            <van-tab
              title="国际/港澳台"
              title-style="font-size:18px;font-weight:600;"
            >
              <p class="cq">曼谷</p>
              <div class="dayer">
                <van-cell
                  :title="date"
                  :value="`共${day}晚`"
                  @click="show = true"
                />
                <van-calendar
                  v-model="show"
                  type="range"
                  @confirm="onConfirm"
                  color="#158489"
                 
                />
              </div>

              <van-search
                v-model="value"
                placeholder="景区/地点/房源名"
                left-icon=""
                background-color="red"
              />
              <van-button class="btn">搜索房源</van-button>
            </van-tab>
          </van-tabs>
        </div>
      </div>

      <div class="under">
        <div class="underd">
          <van-grid :border="false">
            <van-grid-item icon="shop-collect-o" text="特惠商城" />
            <van-grid-item icon="wap-home-o" text="整个房源" />
            <van-grid-item icon="balance-o" text="全民抽奖" />
            <van-grid-item icon="flag-o" text="当地体验" />
          </van-grid>
          <div class="giftbag">
            <van-icon name="bill" size="30px" color="red" class="gift" />
            <span class="text">最高￥270礼券待领取</span>
            <van-button class="btn">立即领取</van-button>
          </div>
          <div class="title">夏季特惠房源</div>
          <div class="titler">优品房源&nbsp;&nbsp;|&nbsp;&nbsp;低至五折</div>

          <div class="index">
            <van-tabs
              v-model="navactive"
              sticky
              animated
              title-active-color="#158489"
              line-height="0"
            >
              <van-tab
                v-for="(item, i) in city"
                :key="i"
                :title="item.city_name"
                :id="item.cid + ''"
                title-style="font-weight: 900;font-size:18px"
              >
              </van-tab>
            </van-tabs>
            <van-row
              type="flex"
              justify="space-between"
              v-infinite-scroll="loadmore"
              infinite-scroll-distance="10"
              infinite-scroll-disabled="busy"
              :infinite-scroll-immediate-check="true"
            >
              <van-col
                class="messg"
                span="6"
                v-for="(item, i) in discount"
                :key="i"
              >
                <router-link :to="`/details?hid=${item.hid}`">
                  <img :src="item.pic_1" alt="" />
                  <p>{{ item.address }}</p>
                  <div class="messgid">
                    {{ item.title }}
                  </div>
                  <span class="messgmoney">￥{{ item.price }} </span>
                  <span class="messgoldmoney">￥{{ item.old_price }}</span>
                </router-link>
              </van-col>
            </van-row>
          </div>
          <router-link to="/search">
            <van-button class="more">显示更多特惠房源</van-button>
          </router-link>

          <img src="../assets/airbanner.jpg" alt="" />
          <p>没有更多内容了...</p>
        </div>
      </div>
    </div>

    <van-tabbar v-model="selected" fixed class="foot" active-color="#158489" z-index="0"> 
      <van-tabbar-item name="home" icon="wap-home-o">首页</van-tabbar-item >
      <van-tabbar-item name="wish" icon="like-o">心愿单</van-tabbar-item>
      <van-tabbar-item name="message" icon="smile-comment-o">收件箱</van-tabbar-item>
      <van-tabbar-item name="my" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "home",
      active: 0,
      date: "选择入住退房日期",
      day: "1",
      show: false,
      value: "",
      city: [],
      discount: [],
      navactive: 0,
      page: 1, // 存储当前页码
      busy: false,
    };
  },

  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}月${date.getDate()}日`;
    },
    onConfirm(date) {
      const [start, end] = date;
      this.show = false;
      this.day = (end.getTime() - start.getTime()) / (3600000 * 24);
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
    },

    //滚动加载下一页
    loadmore() {
      this.busy = true; //暂时先关闭滚动加载
      this.$indicator.open("加载中...");
      let cid = this.navactive;
      this.page++;
      console.log(`加载中...${cid + 1},${this.page}`);
      this.axios
        .get(`/discount?cid=${cid + 1}&page=${this.page}`)
        .then((result) => {
          console.log(result);
          this.discount = [...this.discount, ...result.data.result];
          this.$indicator.close();
          this.busy = false; //加载完后再次开启滚动加载
        });
    },
  },

  mounted() {
    //发送请求，加载城市列表
    this.axios.get("/city").then((result) => {
      console.log(result);
      this.city = result.data.result;
    });

    this.axios.get("/discount?cid=1&page=1").then((result) => {
      console.log(result);
      this.discount = result.data.result;
    });
  },

  watch: {
    // 监听导航切换更新页面
    navactive(newval) {
      // 把page初始化为1
      this.page = 1;
      //  window.scrollTo(0, 0); // 控制窗口滚动条滚动到顶部
      this.axios.get(`/discount?cid=${newval + 1}&page=1`).then((result) => {
        console.log(result);
        this.discount = result.data.result;
      });
    },

    /** 监听底部选项卡 */
    selected(newval) {
      console.log(newval);
      // 一旦选择了其它选项卡，触发selected的变化
      if (newval == "home") {
        this.$router.push("/");
      } else if (newval == "wish") {
        this.$router.push("/wish");
      } else if (newval == "message") {
        this.$router.push("/message");
      } else if (newval == "my") {
        this.$router.push("/my");
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#banner {
  height: 300px;
  width: 100%;
  position: fixed;
}
.tab {
  width: 90%;
  height: 220px;
  background-color: #ffffff;
  border: 3px solid #ececec;
  box-shadow: 1px 5px 5px #ececec;
  border-radius: 10%;
  position: absolute;
  top: 25%;
  left: 4%;
  z-index: 1;
}
.tab .taber {
  margin: 6px 20px 0px 10px;
}
.tab .taber .cq {
  margin-left: 17px;
  color: #484848;
  font-weight: 600;
}
.tab .taber .btn {
  width: 90%;
  height: 40px;
  color: #ffffff;
  background-color: #158489;
  border-radius: 5px;
  margin-left: 5%;
}
.tab .taber .dayer {
  border-top: 2px solid #f4f4f3;
  border-bottom: 2px solid #f4f4f3;
  color: #484848;
  font-weight: 600;
}
.under {
  width: 100%;
  position: absolute;
  background-color: #ffffff;
  top: 40%;
  margin: 0;
}
.under .underd {
  margin: 35% 5% 0 5%;
}
.under .underd .giftbag {
  height: 60px;
  margin-top: 20px;
  border: 1px solid #ececec;
  border-radius: 10px;
  box-shadow: 1px 1px 1px #ececec;
}
.under .underd .giftbag .gift {
  margin: 15px 0 0 15px;
}
.under .underd .giftbag .text {
  line-height: 60px;
  vertical-align: top;
  margin-left: 10px;
  font-size: 12px;
  font-weight: 600;
}
.under .underd .giftbag .btn {
  width: 27%;
  height: 30px;
  color: #ffffff;
  background-color: #eb2450;
  border-radius: 8px;
  margin: 15px 0px 0px 20%;
  vertical-align: top;
}
.under .underd .title {
  font-size: 20px;
  font-weight: 600;
  margin-top: 30px;
}
.under .underd .titler {
  margin: 8px 0 10px 0;
  font-size: 10px;
}
.under .underd .index .messg {
  width: 48%;
  margin-top: 5%;
}
.under .underd .index .messg img {
  width: 100%;
  height: 50%;
  border-radius: 10px;
}
.under .underd .index .messg p {
  font-size: 10px;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.under .underd .index .messg .messgid {
  height: 45px;
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.under .underd .index .messg .messgmoney {
  font-weight: 600;
  color: black;
}
.under .underd .index .messg .messgoldmoney {
  text-decoration: line-through;
  color: #a9a9a9;
  font-size: 12px;
}
.under .underd .more {
  width: 100%;
  margin-top: 5%;
  font-weight: 900;
  color: #000000;
  border: 1px solid #000000;
  border-radius: 10px;
}
.under .underd img {
  width: 100%;
  margin-top: 8%;
}
.under .underd p {
  text-align: center;
  margin: 5% 0 25% 0;
  color: darkgrey;
}
</style>