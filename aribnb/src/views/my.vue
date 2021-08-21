<template>
    <div>
        <me1 v-if="$store.state.islogin" ></me1>
        <me v-else></me>
       <van-tabbar v-model="selected" fixed class="foot" active-color="#158489" z-index="0"> 
      <van-tabbar-item name="home" icon="wap-home-o">首页</van-tabbar-item >
      <van-tabbar-item name="wish" icon="like-o">心愿单</van-tabbar-item>
      <van-tabbar-item name="message" icon="smile-comment-o">收件箱</van-tabbar-item>
      <van-tabbar-item name="my" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
    </div>
</template>

<script>
import me from '@/components/me.vue'
import me1 from '@/components/me1.vue'

export default {
    data(){
        return{
             selected:"my"
        }
    },
components:{
me,
me1,
},
    watch:{
       /** 监听底部选项卡 */
    selected(newval){
      console.log(newval)
      // 一旦选择了其它选项卡，触发selected的变化
      if(newval=='home'){
        this.$router.push('/')
      }else if(newval=='wish'){
        this.$router.push('/wish')
      }else if(newval=='message'){
        this.$router.push('/message')
      }else if(newval=='my'){
        this.$router.push('/my')
      }
    }
        
    }
}
</script>
