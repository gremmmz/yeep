import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Arr from '../components/arr.vue'
import Profile from '../components/profile.vue'
import Popup from '../components/popup.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Wish',
    component: () => import(/* webpackChunkName: "details" */ '../views/Wish.vue')
  },
  ,
  {
    path: '/Message',
    component: () => import(/* webpackChunkName: "details" */ '../views/Message.vue')
  },
  ,
  {
    path: '/details',
    component: () => import(/* webpackChunkName: "details" */ '../views/details.vue')
  }
  ,
  {
    path: '/my',
    component: () => import(/* webpackChunkName: "details" */ '../views/my.vue')
  },
  ,
  {
    path: '/register',
    component: () => import(/* webpackChunkName: "details" */ '../views/register.vue')
  },
  ,
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "details" */ '../views/login.vue')
  },
  {
    path: '/search',
    component: () => import(/* webpackChunkName: "details" */ '../views/Search.vue')
  },
  {
    path: '/popup',
    name: 'Popup',
    component: Popup
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },

  {
    path: '/arr',
    name: 'Arr',
    component: Arr
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
