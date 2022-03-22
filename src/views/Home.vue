<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-md-5 text-center">
          <img
            class="img-thumbnail md-margin-bottom-10"
            src="https://i.postimg.cc/c4zbtsQj/Artisticly.png"
            alt="shop logo img"
          />
        </div>
        <div class="col-md-7">
          <h1>ITS NOT FASION ITS<span id="name"> ARTISTICLY DEADLY</span></h1>
          <h3>Check latest styles out</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
.container {
  margin-top: 4.5em;
}
.home {
  height: 67vh;
}
.img-thumbnail {
  height: 55vh;
}
#name {
  font-weight: bold;
  color: #85a9d8;
}
.col-md-7 {
  margin-top: 8.5em;
}

@media screen and (max-width: 600px) {
}
</style>
