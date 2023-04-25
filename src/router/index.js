import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignIn.vue')
  },
  {
    path: '/feed',
    name: 'feed',
    component: () => import(/* webpackChunkName: "about" */ '../views/Feed.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
  }

]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
