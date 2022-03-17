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
          <span>OUR LATEST STYLES</span>
          <p>check our products out</p>
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
  /* border: 1px solid; */
  margin-top: 4.5em;
}
.home {
  height: 67vh;
}
.img-thumbnail {
  height: 55vh;
}
@media screen and (min-width: 100px) and (max-width: 799px);
</style>
