import Vue from 'vue'
import Router from 'vue-router'
import LoginPanel from '@/components/LoginPanel'
import Navbar from '@/components/Navbar'
import Home from '@/components/Home'
import Profile from '@/components/Profile'
import Login from '@/components/Login'
import Register from '@/components/Register'

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
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
  ]
})
