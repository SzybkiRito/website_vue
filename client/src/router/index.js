import Vue from 'vue'
import Router from 'vue-router'
import LoginPanel from '@/components/LoginPanel'
import Navbar from '@/components/Navbar'
import Home from '@/components/Home'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/LoginPanel',
      name: 'LoginPanel',
      component: LoginPanel
    },
    {
      path: '/Navbar',
      name: 'Navbar',
      component: Navbar
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
