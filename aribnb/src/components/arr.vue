<template>
    <div>
        <!-- 导航栏 -->
  
        <van-nav-bar>
            <template #left>
                <router-link to="/my">
                    <van-icon name="arrow-left" size="22" color="#444444"/>
                </router-link>               
            </template>
        </van-nav-bar>

        <p>订单中心</p>

        <div class="dindan">
        <van-tabs v-model="active">
            <van-tab title="全部订单">
                <van-card
                    num="2"
                    price="2.00"
                    desc="描述信息"
                    title="商品标题"
                    thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
                    >
                    <template #tags>
                        <van-tag plain type="danger">标签</van-tag>
                        <van-tag plain type="danger">标签</van-tag>
                    </template>
                    <template #footer>
                        <van-button size="mini">按钮</van-button>
                        <van-button size="mini">按钮</van-button>
                    </template>
                </van-card>
            </van-tab>
            <van-tab title="有效订单">
                <van-card
                    num="2"
                    price="2.00"
                    desc="描述信息"
                    title="商品标题"
                    thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
                    >
                    <template #tags>
                        <van-tag plain type="danger">标签</van-tag>
                        <van-tag plain type="danger">标签</van-tag>
                    </template>
                    <template #footer>
                        <van-button size="mini">按钮</van-button>
                        <van-button size="mini">按钮</van-button>
                    </template>
                </van-card>
            </van-tab>
            <van-tab title="待支付">
                <van-card
                    num="2"
                    price="2.00"
                    desc="描述信息"
                    title="商品标题"
                    thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
                    >
                    <template #tags>
                        <van-tag plain type="danger">标签</van-tag>
                        <van-tag plain type="danger">标签</van-tag>
                    </template>
                    <template #footer>
                        <van-button size="mini">按钮</van-button>
                        1
                        <van-button size="mini">按钮</van-button>
                    </template>
                </van-card>
            </van-tab>
        </van-tabs>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            active:0,
        }
    }
}
</script>

<style scoped>
p{
    font-size: 25px;
    font-weight: 500;
    margin-left: 5%;
    margin-top: 5%;
}
.dindan{
    width: 65%;
    margin-top: 5%;
}

</style>
