<template>
  <div id="container">
    <div id="headline">
      <h1 class="animated bounce infinite">ENTER SOME TEXT HERE</h1>
      <h3>ENTER SOME TEXT HERE</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({})
};
</script>

<style>
  body {
    background-image: url("~@/assets/bckg.jpg");
  }
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  height: 100%;
  width: 100%;
  background-image: url("~@/assets/bckg.jpg");
}
h1 {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 20%;
  
  animation-name: enter;
  animation-duration: 3s;
}
h3 {
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  animation-name: enter;
  animation-duration: 3s;
}

@keyframes enter {
  0%{opacity: 0;}
  100%{opacity: 1;}
}
</style>
