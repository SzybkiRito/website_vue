<template>
  <div id="app">
    <navbar></navbar>
    <notifications group="auth" position="bottom right"/>
    <router-view />
  </div>
</template>

<script>
import LoginPanel from '@/components/LoginPanel'
import Navbar from '@/components/Navbar'
import Home from '@/components/Home'
import Profile from '@/components/Profile'

export default {
  name: 'App',
  components: {
    'Navbar': Navbar,
    'LoginPanel': LoginPanel,
    'Home': Home,
    'Profile': Profile
  },
  data () {
    return {
      status: ''
    }
  }
}
</script>

<style>

</style>
