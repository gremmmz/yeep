<template>
  <div class="wish">
    <h2>心愿单</h2>
    <!-- <div>
    <p>点击房源图片上的心形图片即可收藏您喜爱的房源</p>
    <img src="../assets/bannerF.png" alt="">
    </div> -->
    <div>
      <h4>{{n}}个房源</h4>
      <div>
        <van-card
        v-for="(item,i) in discount"
        :key="i"
          :price="item.price"
          desc="成都精美房源"
          :title="item.title"
          :thumb="item.pic_1"
          :origin-price="item.old_price"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      n: "3",
      discount:[]
    };
  },
  mounted(){
      this.axios.get("/discount?cid=2&page=3").then((result) => {
      console.log(result);
      this.discount = result.data.result;
    });
  }
};
</script>

<style scoped>
.wish {
  margin: 20% 10%;
}
.wish h2 {
  font-size: 30px;
}
.wish img {
  width: 100%;
}
.wish p {
  font-size: 16px;
  color: dimgrey;
  font-weight: 400;
}
</style>


