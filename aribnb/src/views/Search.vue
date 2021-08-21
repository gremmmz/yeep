<template>
  <div>
		<!-- 头部 -->
		<van-sticky>
			<van-icon class="goback" @click="goback" name="arrow-left" size="25"/>
			<van-search v-model="value"
									class="search"
									shape="round"
									placeholder="按城市、地址、地标搜索"
									background="#FCFDFF"
									@search="onSearch">
			</van-search>
			<div class="collapse" @click="collapse">
				<van-icon v-if="show" name="shrink" size="34"/>
				<van-icon v-else name="expand" size="34"/>
      </div>
			<!-- 筛选项选择框 -->
			<div class="wrapper" v-show="show">
				<!-- 城市筛选 -->
				<div class="wrapper_city">
					<van-field readonly
										 clickable
							 	  	 label="城市"
							 	 	 	 :value="city"
										 placeholder="选择城市"
										 @click="showPicker = true"
										 />
					<van-popup v-model="showPicker"  round position="bottom">
						<van-picker show-toolbar
												:columns="columns"
												:default-index="0"
												@cancel="showPicker = false"
												@confirm="onConfirm"
												/>
					</van-popup>
				</div>
				<!-- 价格筛选 -->
				<div class="wrapper_price">
					<p>价格范围： ￥{{range[0]}}-￥{{range[1]}}</p>
					<van-slider v-model="range" range :step="10" :min="0" :max="1000" active-color="#85A6DC" />
				</div>
				<!-- 按键 -->
				<div class="wrapper_end">
					<span @click="onClear">清除全部</span>
					<van-button @click="onScreen" color="#222222">查看筛选房源</van-button>
				</div>
			</div>
		</van-sticky>

		<!-- 主体房源列表 -->
			<van-list v-model="loading"
								:finished="finished"
								finished-text="没有更多了"
								loading-text="加载中..."
								:offset=5
								:immediate-check='false'
								@load="onLoad"
								>
				<!-- 单个房源 -->
				<div class="houses" v-for="(item,i) in list" :key="i" >
					<router-link :to="`/details?hid=${item.hid}`">
						<!-- 图片 -->
						<van-swipe class="houses_img" indicator-color="white" >
							<van-swipe-item><van-image :src="item.pic_1"/></van-swipe-item>
							<van-swipe-item><van-image :src="item.pic_2"/></van-swipe-item>
							<van-swipe-item><van-image :src="item.pic_3"/></van-swipe-item>
						</van-swipe>
						<!-- 内容 -->
						<p class="houses_address">{{item.address}}</p>
						<div class="houses_title">{{item.title}}</div>
						<span class="houses_price">￥{{item.price}}/晚</span>
					</router-link>
				</div>
			</van-list>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: '',		//模糊搜索
			show: false,
			showPicker: false,
			city: '重庆',			//城市筛选
			columns: ['重庆','北京','成都','涪陵','上海'],	
			cid: 1,			//城市对应主键cid
			range: [0,1000],	//价格范围
			list: [],		//保存房源信息列表
      loading: false,
			finished: false,
			page: 1,
			pagecount: 1
    };
  },

  methods: {
		/** 点击返回首页*/
    goback() {
      window.history.back();
    },
		/** 点击展开或关闭选择框 */
		collapse(){
      this.show = !this.show;
		},
		/** 筛选数据 */
		onConfirm(city, index) {
      this.city = city;
      this.showPicker = false;
			this.cid = index+1;
			// console.log(this.city, this.cid);
		},
		/** 点击清空筛选 */
		onClear(){
			this.onConfirm('重庆', 0)
			this.range = [0,1000];
		},
		/** 加载房源列表 */
		loadList(cid, start, end, page, callback){

			cid = this.cid;
			start = this.range[0];
			end = this.range[1];
			page = this.page;
			this.axios.get(`/price_screen?cid=${cid}&start=${start}&end=${end}&page=${page}`).then(result=>{
				// console.log(result)
				this.pagecount = result.data.pagecount;
				let res = result.data.result;
				callback(res);
			})
		},
		/** 点击按钮查询筛选结果 */
		onScreen(){
			this.show = false;
			window.scrollTo(0,0);
			this.page = 1;
			this.loadList(this.cid, this.range[0], this.range[1], this.page, (res)=>{
				this.list = res;
			console.log(this.list,this.page,this.pagecount);
			})
			this.finished = false;

		},
		/** 搜索框查询 */
		onSearch(){
			// console.log(this.value,this.page)
			// this.axios.get(`/search?content=${this.value}&page=${this.page}`).then(result=>{
			// 	console.log(result);
			// })
		},

		/** 触底加载 */
    onLoad() {
			if(this.page===this.pagecount){
				this.finished = true;
			}

			setTimeout(() => {
				this.page++;

				this.loadList(this.cid, this.range[0], this.range[1], this.page, (res)=>{
					// console.log(this.list);
					// console.log(res);
					this.list = [...this.list, ...res];

					this.loading = false;
				})
			}, 500);
		},

	},
  /** 页面挂载后， */
	mounted(){
		this.loadList(1, 0, 1000, 1, (res)=>{
			this.list = res;
			console.log(this.list)
			
		})
	},
};
</script>

<style scoped>
.goback {
  position: fixed;
  left: 10px;
  top: 14px;
  z-index: 1000;
}
.search {
  padding-left: 42px;
  padding-right: 44px;
}
.collapse{
	width: 34px;
	height: 34px;
	position: fixed;
	right: 8px;
	top: 10px;
	z-index: 1000;
}
.wrapper{
	background-color: #FCFDFF;
	position: fixed;
	top: 53px;
	z-index: 900;
	width: 100%;
}
.wrapper_city{
	margin: 0 25px;
	border-bottom: 1px solid #F0F0F0;
}
.wrapper_city>:first-child{
	background-color: #FCFDFF;
}
.wrapper_price{
	margin: 0 40px 0;
}
.wrapper_end{
	margin-top: 20px;
	border: 1px solid #F0F0F0;
}
.wrapper_end>:first-child{
	line-height: 60px;
	vertical-align: middle;
	font-size: 14px;
	color: #222222;
	margin-left: 7%;
}
.wrapper_end>:last-child{
	vertical-align: middle;
	border-radius: 5px;
	float: right;
	top: 9px;
	right: 7%;
}
.houses {
  width: 85%;
	min-height: 100px;
  margin: 20px auto;
	border-radius: 12px;
	box-shadow: 0px 0px 10px 8px #F0F0F0;
}
.houses_img {
  height: 200px;
  border-radius: 12px 12px 6px 6px;
  overflow: hidden;
}
.houses_address {
  font-size: 14px;
  margin: 4px 0 2px 0;
  color: #39576a;
}
.houses_title {
  color: #222222;
  font-size: 18px;
  font-weight: bold;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.houses_price {
  color: #222222;
  margin-top: 2px;
  font-size: 16px;
  font-weight: bold;
}
</style>
