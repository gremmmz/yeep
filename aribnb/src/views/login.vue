<!-- views/Register.vue -->
<template>
  <div>
      <router-link to="/my">
        <van-icon name="arrow-left" class="x" size="25px"/>
      </router-link>
      
      <div class="tle">
        <h1>账号密码登录</h1>
        <p>使用已注册手机号登录</p>
      </div>

    <!-- 表单输入框 -->
    <div class="field">
      <p class="p1">手机号</p>
    <van-field 
            type="text"
            class="ipt"
            v-model="phone"
            :state="phoneState"
            @blur.native="checkPhone"
            placeholder="请输入手机号">
            
    </van-field>
    <p class="p1">密码</p>
    <van-field type="password"
              v-model="pwd"
              :state="pwdState"
              placeholder="请输入密码">
    </van-field>
    </div>

    <!-- 登录按钮 -->
    <van-button class="btn" @click="checkForm" type="" size="large">登录</van-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';    
export default {
  data() {
    return {
      phone: "",
      phoneState: "",
      pwd: "",
      pwdState: ""
    };
  },
  methods: {
    /** 验证密码 */
    checkPwd() {
      let reg = /^\d{6}$/;
      if (reg.test(this.pwd)) {
        this.pwdState = "success";
        return true;
      } else {
        this.pwdState = "error";
        return false;
      }
    },

    /** 验证账号 */
    checkPhone() {
      // 获取文本框的值
      // 通过正则表达式，验证文本框的内容是否合法
      let reg = /^1[3-9]\d{9}$/;
      // 分支业务：如果合法(state:succes)如果不合法(state:error)
      if (reg.test(this.phone)) {
        this.phoneState = "success";
        return true;
      } else {
        this.phoneState = "error";
        return false;
      }
    },

    /** 点击确认按钮 验证表单 */
    checkForm() {
      // 验证手机号
      if (this.checkPhone() && this.checkPwd()) {
        // console.log("login...");
        // 发送请求，执行登录业务
        this.axios.post('/login',`user_phone=${this.phone}&password=${this.pwd}`).then(result=>{
          console.log(result)
          if(result.data.code==200){
            this.$toast({
              message:'登录成功',
              position:'bottom',
              duration:200
            })
            //调用vuex，更新登录状态    loginOk()\
            //把服务端响应中保存的用户名，传给loginOk
            let phone = result.data.phone;
            this.$store.commit('loginOk',phone);

            //向sessionStorage中存储islogin与phone
            sessionStorage.setItem('islogin','true');
            sessionStorage.setItem('phone',phone);

            //跳转到主页
            this.$router.push('/my')
          }else if(result.data.code==201){
            this.$toast({
              message:'账号密码不匹配，请重新输入',
              position:'bottom',
              duration:2000
            })
          }
        })
      }
    }
  }
};
</script>

<style scoped>
.x{
  margin: 30px 0 18px 20px;
}
.tle{
  margin-left: 20px;
}
.tle h1{
  font-size: 28px;
  font-weight: 550;
  color: #555;
}
.tle p{
  margin-top: 15px;
  margin-bottom: 30px;
  font-size: 14px;
  font-weight: 600;
  color: #888;
}
.btn{
  color: #fff;
  font-size: 18px;
  background-color: #018489;
  width: 305px;
  margin-left: 35px;
  margin-top: 20px;
  border-radius: 3px;
  border: 0;
}
.p1{
  margin-left: 20px;
  font-size: 12px;
  color: #777;
}
.s1{
  font-size: 12px;
  font-weight: 500;
}
</style>

