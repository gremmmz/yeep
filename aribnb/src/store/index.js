import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    islogin:sessionStorage.getItem('islogin'),//用于保存当前是否已登录
    phone:sessionStorage.getItem('phone')
  },
  mutations: {
    //这个方法由vuex调用，vuex将会自动传入state对象，与参数：phone
    loginOk(state,phone){
      state.islogin = true;
      state.phone = phone;
    }
  },
  actions: {
  },
  modules: {
  }
})
