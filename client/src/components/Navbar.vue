<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand><router-link class="nav-link" to="/" style="color: white; outline: 0;">Home</router-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item v-if="status!=='loggedIn'"><router-link class="nav-link" to="/LoginPanel" style="color: white;">Login</router-link></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown right v-if="status=='loggedIn'">
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="/#/profile">Profile</b-dropdown-item>
          <b-dropdown-item v-on:click="logout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import EventBus from "./EventBus";

export default {
  name: "Navbar",
  data() {
    return {
      status: ""
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("email");
      this.status = "";
    }
  },
  mounted() {
    EventBus.$on("currentStatus", data => {
      this.status = data;
    });
  }
};
</script>

<style>
body {
  font-family: "Noto Sans JP", sans-serif;
  background-color: #2a2a72;
  background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%) no-repeat;
  color: black;
}
.dropdown-backdrop {
    position: static;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
