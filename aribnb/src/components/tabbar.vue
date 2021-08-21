<template>
    <div>
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="home" >
                <img slot="icon" v-if="selected=='home'" src="../assets/common/home_fill.png">
                <img slot="icon" v-else src="../assets/common/home.png">
                    首页
            </mt-tab-item>
            <mt-tab-item id="wish">
                <img slot="icon" v-if="selected=='wish'" src="../assets/common/like_fill.png">
                <img slot="icon" v-else src="../assets/common/like.png">
                    心愿单
            </mt-tab-item>
            <mt-tab-item id="message">
                <img slot="icon" v-if="selected=='message'" src="../assets/common/community_fill.png">
                <img slot="icon" v-else src="../assets/common/community.png">
                    收件箱
            </mt-tab-item>
            <mt-tab-item id="my">
                <img slot="icon" v-if="selected=='my'" src="../assets/common/people_fill.png">
                <img slot="icon" v-else src="../assets/common/people.png">
                    我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
export default {
    data(){
        return{
            selected:""
        }
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

