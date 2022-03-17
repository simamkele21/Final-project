<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: "app",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #8394a5;
  background-color: #4e4a53;
  height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #a1a4a8;
}

#nav a.router-link-exact-active {
  color: #bac4bf;
}

@media only screen and (max-width: 600px) {
  #nav {
    padding: 0px;
    background-color: rgb(219, 219, 189);
  }
}
</style>
