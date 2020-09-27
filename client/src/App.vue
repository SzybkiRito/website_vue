<template>
  <div id="app">
    <navbar></navbar>
    <notifications group="auth" position="bottom right" />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import Profile from "@/components/Profile";
import Login from "@/components/Login";
import Register from "@/components/Register";

export default {
  name: "App",
  components: {
    Navbar: Navbar,
    Home: Home,
    Profile: Profile
  },
  data() {
    return {
      status: ""
    };
  },
  watch: {
    $route(to, from) {
      document.title = to.meta.title || "Webiste";
    }
  }
};
</script>

<style></style>
