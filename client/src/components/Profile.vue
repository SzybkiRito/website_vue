<template>
  <div id="container-fluid">
    <div class="jumbotron mt-5">
      <div id="data " class="">
        <img vif="avatar !== ''" v-bind:src="avatar" id="avatar" class="" />
        <p style="">Username: asd</p>
        <p class="">Email: {{ email }}</p>
        <input
          name="avatar"
          type="avatar"
          class="form-control mx-auto"
          id="avatar_input"
          placeholder="https://imgur.com/dsasdsadasdas.jpg"
          v-model="new_avatar"
          style="margin: 15px;"
        />
        <button type="submit" class="btn btn-warning" v-on:click="newAvatar">Change Avatar</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import EventBus from "./EventBus";

export default {
  name: "Profile",
  data() {
    return {
      email: "",
      new_avatar: "",
      avatar:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
    };
  },
  methods: {
    newAvatar() {
      axios
        .post("http://localhost:8001/users/new_avatar", {
          email: localStorage.getItem("email"),
          avatar: this.new_avatar
        })
        .then(res => {
          console.log(`Avatar have been updated!`);
        })
        .catch(err => console.log(err));
    }
  },
  mounted() {
    let test = localStorage.getItem("email");
    this.email = test;

    axios
      .post("http://localhost:8001/users/get_avatar", {
        email: localStorage.getItem("email")
      })
      .then(res => {
        this.avatar = res.data;
      })
      .catch(err => console.log(err));
  }
};
</script>

<style></style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron {
  margin: auto;
  min-width: 50%;
  max-width: 60%;
  min-height: 230px;
  border-radius: 25px;
}
.mt-5 {
  margin-top: 5rem !important;
}
input {
  width: 40%;
}
#avatar {
  float: left;
  max-width: 200px;
  min-width: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -25px;
  border-radius: 50%;
}
p {
  text-align: center;
  margin: auto;
}
button {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
