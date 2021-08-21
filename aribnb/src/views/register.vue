<template>
   <div>
      <router-link to="/my">
      <van-icon class="x" name="cross" size="25px"/>
      </router-link>
    
      <div class="tle">
        <h1>手机号码注册登录</h1>
        <p>未注册的手机号验证后将自动创建新账户</p>
      </div>
         <!-- 表单 -->
         <van-field type="tel"
                   label="手机号" 
                   placeholder="请输入手机号"
                   v-model="phone"
                   @blur.native.capture="checkPhone"
                   :state="phoneState">
         </van-field>
         <van-field type="password"
                   label="密码" 
                   placeholder="请输入密码"
                   v-model="pwd"
                   :state="pwdState">
         </van-field>
         <van-field type="password"
                   label="确认密码" 
                   placeholder="请再次输入密码"
                   v-model="repwd"
                   :state="repwdState">
         </van-field>

      <van-button class="ww" @click="checkForm">注册</van-button>
   </div>
</template>

<script>
export default {
  data() {
    return {
      phone: "",
      phoneState: "",
      pwd: "",
      pwdState: "",
      repwd: "",
      repwdState: ""
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

    checkRepwd() {
      let reg = /^\d{6}$/;
      if (this.pwd == this.repwd && reg.test(this.repwd)) {
        this.repwdState = "success";
        return true;
      } else {
        this.repwdState = "error";
        return false;
      }
    },

    /** 验证手机号 */
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
      // 验证用户名
      if (this.checkPhone() && this.checkPwd() && this.checkRepwd()) {
        // console.log("regist..."); 
        // 发送http请求，执行注册业务
        this.axios.post('/register',`user_phone=${this.phone}&password=${this.pwd}`).then(result=>{
          console.log(result)
          if(result.data.code==200){//成功
            this.$toast({
              message:'注册成功',
              position:'bottom',
              duration:5000
            });
            // 跳转到登录
            this.$router.push('/login');
          }else if(result.data.code==201){//失败
             this.$toast({
              message:'该用户已注册',
              position:'bottom',
              duration:3000
            });
          }
        })
      }
    }
  }
};
</script>

<style scoped>
.x {
  margin: 30px 0 20px 20px;
}
.ww {
  width: 306px;
  background-color: #398287;
  margin-left: 50px;
  margin-top: 50px;
  border-radius: 3px;
  color: aliceblue;
  font-size: 20px;
}
.tle {
  margin-left: 20px;
}
.tle h1 {
  font-size: 28px;
  font-weight: 550;
  color: #555;
}
.tle p {
  margin-top: 15px;
  margin-bottom: 30px;
  font-size: 14px;
  font-weight: 600;
  color: #888;
}
.s1 {
  font-size: 12px;
  font-weight: 500;
}
.vc{
margin-top: 80%;
}
</style>