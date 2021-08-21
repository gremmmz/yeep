<template>
  <div>
    <!--导航  -->
    <van-nav-bar style="opacity: 1" :fixed="true" v-model="active">
      <template #left>
        <div>
          <router-link to="/"
            ><van-icon name="arrow-left" class="tu" size="20"></van-icon
          ></router-link>
        </div>
      </template>
      <template #right id="xin">
        <van-icon
          v-if="active == 'xin'"
          name="like-o"
          class="tu"
          size="20"
          @click="active = ''"
        ></van-icon>
        <van-icon
          v-else
          name="like"
          class="tu"
          size="20"
          @click="active = 'xin'"
        />
        <div></div>
      </template>
    </van-nav-bar>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <div class="lubo">
          <img :src="article.pic_1" />
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="lubo">
          <img :src="article.pic_2" />
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="lubo">
          <img :src="article.pic_3" />
        </div>
      </van-swipe-item>
    </van-swipe>
    <!-- 折扣 -->
    <van-notice-bar left-icon="volume-o" scrollable>
      尾房抢订，立享今夜特价7折在7小时内预订并于今天入住，锁定当日限时好价。
    </van-notice-bar>
    <!-- 标题和按钮 -->
    <div style="margin-left: 10px; margin-top: 10px">
      <p class="we1">{{ article.address }}</p>
      <h4 style="margin-top: 10px; text-indent: 2em" class="we5">
        {{ article.title }}
      </h4>
      <div style="margin-left: 10px; margin-top: 10px" class="we4">
        <van-button color="gray" size="mini">超赞房东</van-button>
        <van-button color="red" size="mini">可开发票</van-button>
        <van-button color="blue" size="mini">近地地铁</van-button>
        <van-button color="yellowgreen" size="mini">落地窗</van-button>
        <van-button color="gray" size="mini">投影/大电视</van-button>
        <van-button color="gray" size="mini">允许吸烟</van-button>
        <van-button color="gray" size="mini">可接送</van-button>
      </div>
    </div>
    <hr />
    <!-- 优惠券 -->
    <div style="margin-left: 10px">
      <div style="margin: 5% auto">
        <van-button color="yellowgreen" size="mini">领券</van-button
        ><span class="p8">&nbsp;&nbsp;最高￥270端午礼券</span>
      </div>
    </div>
    <hr />
    <!-- 房源概览 -->
    <h4 class="we5">房源概览</h4>
    <div style="margin-left: 10px; display: flex">
      <p style="margin-top: 10px">
        <strong class="we5">尾房抢订，立享今夜特价7折在7小时</strong
        >内预订并于今天入住，锁定当日限时好价。
      </p>
      <img src="../assets/picture/飞机2.png" />
    </div>
    <!-- 房源介绍1 -->
    <div
      class="we5"
      style="
        margin-left: 10px;
        padding: 20px 0;
        text-align: center;
        display: flex;
      "
    >
      <div style="width: 60px">
        <van-icon name="home-o" size="40" /><br />
        <strong>1间卧室</strong>
      </div>
      <div style="width: 60px">
        <van-icon name="aim" size="40" /><br />
        <strong>1张床</strong>
      </div>
      <div style="width: 60px">
        <van-icon name="hotel-o" size="40" /><br />
        <strong>1卫生间</strong>
      </div>
      <div style="width: 60px">
        <van-icon name="user-circle-o" size="40" /><br />
        <strong>2位房客</strong>
      </div>
    </div>
    <hr />
    <!-- 房源介绍2 -->
    <div style="margin-left: 10px" class="we4">
      <h4 class="we5">房源介绍</h4>
      <p class="we5">
        可爱的亲亲们!<br />
        春暖花开，快来重庆旅游啦!
      </p>
      <van-cell is-link @click="showPopup" class="we6">查看详情</van-cell>
      <van-popup
        v-model="show"
        closeable
        close-icon-position="top-left"
        round
        position="bottom"
        :style="{ height: '90%' }"
      >
        <p style="padding-top: 50px; margin-left: 10px; margin-rigth: 10px"></p>
        <hr />
        <div style="margin-rigth: 20%; margin-left: 5%">
          <p>
            房源介绍<br />
            可爱的亲亲们!<br />
            春暖花开，快来重庆旅游啦!<br />
            【已消毒】<br />
            {{ article.detail }}
          </p>

          <hr />
        </div>
      </van-popup>
      <br />
      <br />
      <br />
      <div></div>
    </div>
    <!-- 底部 -->
    <div>
      <van-tabbar
        fixed
        style="
          margin-left: 10px;
          margin-right: 10px;
          padding: 10px 0;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: space-between;
        "
      >
        <div>
          <p class="we5" style="margin-top: 20px; color: red">
            ￥{{ article.price }}/天
          </p>
        </div>
        <!-- 预定按钮 -->
        <div>
          <van-cell @click="showPopup1">
            <van-button type="danger" class="bu1">查看详情与预定</van-button>
          </van-cell>
          <van-popup
            closeable
            close-icon-position="top-left"
            :style="{ height: '100%' }"
            v-model="show1"
            position="bottom"
          >
            <div class="popup2">
              <div class="popup21">
                <p class="p1">整套公寓</p>
                <br />
                <p class="p2">￥{{ article.price }}/天</p>
                <br />
                <img src="../assets/picture/555.jpg" />
              </div>
              <div class="popup22">
                <img src="../assets/picture/7.jpg" />
              </div>
            </div>
            <!-- 日期部分 -->
            <div class="sj">
              <div class="sj1">
                <div class="sj11">
                  <p>入住日期</p>
                  <br />
                  <p class="sjwe">{{ start1 }}</p>
                </div>
                <div class="sj11">
                  <p>退房日期</p>
                  <br />
                  <p class="sjwe">{{ end1 }}</p>
                </div>
                <div class="sj11">
                  <p>房客人数</p>
                  <br />
                  <p class="sjwe">1位房客</p>
                </div>
              </div>
              <van-cell
                title="请选择日期"
                :value="date"
                @click="show2 = true"
                class="sjwe1"
              ></van-cell>
            </div>
            <!-- 费用与税款 -->
            <van-cell @click="showPopup3"
              >费用与税款明细<van-icon name="warning"
            /></van-cell>
            <van-popup
              v-model="show3"
              round
              position="bottom"
              closeable
              :style="{ height: '90%' }"
              close-icon-position="top-left"
            >
              <div class="fy">
                <div class="fy1">
                  <p class="we8">费用与税款明细</p>
                  <div class="fy2">
                    <p class="we9">
                      夏季特惠7折<br />
                      6月1日-6月30日入住，可享受原房费的7折优惠。
                    </p>
                  </div>
                </div>
                <div class="fy3">
                  <p>服务费:减免￥24</p>
                  <br />
                  <p>
                    本单服务费已减免。服务费用于帮助我们维护平台的运营，同时为您的行程提供专业的客服帮助。
                  </p>
                </div>
              </div>
            </van-popup>
            <div class="tu6">
              <img src="../assets/picture/12.jpg" class="tu7" />
            </div>
            <div class="jiage">
              <p>总价(CNY)</p>
              <p>￥{{ article.price * count }}</p>
            </div>
            <!-- 预定按钮 -->
            <div class="ann1">
              <van-button type="danger" size="large" round>
                <div>
                  <van-cell
                    @click="showPopup5"
                    style="background: #ee0a24"
                    class="anl1"
                    >预定</van-cell
                  >
                  <van-popup
                    v-model="show5"
                    style="color: black"
                    round
                    position="bottom"
                    closeable
                    :style="{ height: '50%' }"
                    close-icon-position="top-left"
                  >
                    <div class="anl2">
                      <div class="we31">
                        <p>开始时间:</p>
                        <p>{{ start1 }}</p>
                      </div>
                      <div class="we31">
                        <p>结束时间:</p>
                        <p>{{ end1 }}</p>
                      </div>
                      <div class="we31">
                        <p>价格:</p>
                        <p>￥{{ article.price * count }}</p>
                      </div>
                      <div class="we31">
                        <van-button  type="primary" @click="qdin" class="but2">
                          确定</van-button
                        >
                        <van-button  type="primary" @click="gubi" class="but2"
                          >取消</van-button
                        >
                      </div>
                    </div>
                  </van-popup>
                </div>
              </van-button>
            </div>
          </van-popup>
        </div>
      </van-tabbar>
      <van-calendar v-model="show2" type="range" @confirm="onConfirm" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uid: "1",
      hid: "3",
      start1: "0/0",
      end1: "0/0",
      show: false,
      show5: false,
      active: "xin",
      show1: false,
      show3: false,
      date: "",
      show2: false,
      article: {},
      count: 1,
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    showPopup1() {
      this.show1 = true;
    },
    showPopup2() {
      this.show2 = true;
    },
    showPopup3() {
      this.show3 = true;
    },
    showPopup5() {
      this.show5 = true;
    },
    formatDate(date) {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      const [start, end] = date;
      this.show2 = false;
      // this.count = end.getDate() - start.getDate();
      this.count = (end.getTime() - start.getTime()) / 1000 / 60 / 60 / 24;
      // 转换为毫秒
      console.log(this.count);
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
      this.start1 = this.formatDate(start);
      this.end1 = this.formatDate(end);
    },
    qdin() {
      // 发送订单请求
      this.axios
        .post(
          "/paid_add",
          `uid=${this.uid}&hid=${this.hid}&start_date=${this.start1}&end_date${this.end1}`
        )
        .then((result) => {
          console.log(result);
        });
        this.show5 = false;
    },
    gubi(){
      this.show5 = false;
    }
  },
  mounted() {
    // this.$route.query.id 可以用于获取请求参数  ?id=237
     let hid = this.$route.query.hid;
     window.scrollTo(0,0);
    //  console.log(hid);
    //id拿不到  id=undefined
    // console.log(hid);
    // 发送http请求  加载当前文章的详细数据
    this.axios.get("/detail?hid=" + hid).then((result) => {
      // console.log(result.data);
      // 把文章详情保存在data中，供页面{{}}使用
      this.article = result.data.result[0];
      // console.log(this.article);
      // console.log(this.article.address);
    });
  },
};
</script>
<style scoped>
.tu {
  background: white 1px;
  color: black;
}
.my-swipe {
  text-align: center;
}
.we1 {
  margin-left: 10px;
  font-size: 10px;
  color: blue;
}
.lubo {
  width: 100%;
}
.lubo img {
  width: 100%;
}
.we5 {
  /* 字体加粗 */
  font-weight: bold;
}
.we6 {
  color: rgb(17, 114, 179);
  font-weight: bold;
  font-size: 100%;
}
.we4 {
  line-height: 30px;
}
.popup2 {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  margin-top: 10%;
  width: 100%;
}
.popup2 .p1 {
  margin-top: 5%;
  color: tan;
}
.popup2 .p2 {
  font-weight: bold;
}
.popup21 {
  margin-top: 5%;
  margin-bottom: 5%;
  width: 23%;
}
.popup21 img {
  margin-left: 15%;
}
.popup22 {
  width: 40%;
}
.popup22 img {
  width: 90%;
  margin: 30% 3%;
}
.sj {
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
}
.sj1 {
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
}
.sj11 {
  border: none;
}
.sjwe {
  font-size: 130%;
  color: rgb(17, 114, 179);
}
.sjwe1 {
  text-align: left;
  font-size: 100%;
  color: red;
  font-weight: bold;
}
.bu1 {
  margin-top: 5%;
  border-radius: 10%;
}
.fy {
  border-top: 1px solid black;
  margin-top: 12%;
}
.fy1 {
  border-bottom: 1px solid gray;
  width: 90%;
  margin: 3% 0 5% 5%;
}
.fy2 {
  margin-top: 10%;
}
.fy3 {
  width: 90%;
  margin: 3% 0 5% 5%;
  text-align: left;
}

.we8 {
  font-weight: bold;
  font-size: 25px;
  text-align: left;
}
.we9 {
  text-align: left;
  line-height: 30px;
  margin-bottom: 15px;
}
.ann1 {
  width: 90%;
  margin: 30% 0 5% 5%;
  color: white;
}
.tu6 {
  width: 100%;
}
.tu7 {
  width: 100%;
}
.jiage {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.jiage p {
  margin: 5% 5%;
  font-size: 130%;
  font-weight: bold;
}
.anl1 {
  font-size: 125%;
  text-align: center;
}
.anl2 {
  font-size: 125%;
  text-align: left;
  width: 80%;
  margin: 10% auto;
}
.we31 {
  display: flex;
  justify-content: space-between;
}
.anl2 p {
  margin-bottom: 3%;
}
.but2{
 
 width: 30%;
 border-radius: 8px;
 background-color: black;
}
</style>
