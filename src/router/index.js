import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import notFound from '../components/notFound.vue'

Vue.use(VueRouter)

  const routes = [{
    path: '/accounts/login/',
    name: 'login',
    component: Login
  },{
    path: '/',
    name: 'home',
    component: Home , 
    meta:{
      auticationManager:true
    }
  },{
    path: '/:UserNickName',
    name: 'profile',
    component: Profile
  },{
    path:'*',
    name:'notFound',
    component:notFound

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
