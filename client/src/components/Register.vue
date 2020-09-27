<template>
  <div id="container-fluid">
    <form class="mt-10">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          v-model="username"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="email"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="register">
        Register
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import EventBus from "./EventBus";

export default {
  name: "LoginPanel",
  data() {
    return {
      email: "",
      password: "",
      username: "",
      avatar:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
    };
  },
  methods: {
    register() {
      axios
        .post("http://localhost:8001/users/register", {
          username: this.username,
          email: this.email,
          password: this.password,
          avatar: this.avatar
        })
        .then(res => {
          if (res.data.error == "User already exists") {
            this.$notify({
              group: "auth",
              title: "LoginApp",
              text: "User already exists!",
              duration: 10000
            });
            return;
          } else if (res.data.status == `${this.email} registered`) {
            this.$notify({
              group: "auth",
              title: "LoginApp",
              text: "Welcome in our community!",
              duration: 10000
            });
            this.email = "";
            this.password = "";
            this.username = "";
          } else {
            this.$notify({
              group: "auth",
              title: "LoginApp",
              text: "Username already taken",
              duration: 10000
            });
            return;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>

<style scoped>
form {
  background-color: white;
  border-radius: 25px;
  padding: 50px;
  max-width: 500px;
  margin: auto;
  animation-name: fade;
  animation-duration: 3s;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.mt-10 {
  margin-top: 15rem !important;
}
@media (min-width: 320px) {
  form {
    max-width: 350px;
  }
}
</style>
