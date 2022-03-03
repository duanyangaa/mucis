import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/home.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/',redirect:'/home'},
  {path: '/home',name: 'Home',component: Home,
   children:[
     {path:'/home',redirect:'/home/a'},
     {path:'a',component:()=>import('../views/Home/homechildren/home_a.vue')},
     {path:'b',component:()=>import('../views/Home/homechildren/home_b.vue')},
     {path:'c',component:()=>import('../views/Home/homechildren/home_c.vue')}
   ]
},
  {path: '/broadcast',name: 'Remmd',component:()=>import('../views/Remmd/remmd.vue')},
  {path: '/we',name:'We',component:()=>import('../views/video/video.vue')}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
