<template>
  <nav id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Shop' }">Shop</router-link> |
    <router-link :to="{ name: 'Cart' }">Cart</router-link> |
    <router-link :to="{ name: 'Contact' }">Contact</router-link> |
    <router-link :to="{ name: 'Login' }">Login</router-link> |
    <router-link :to="{ name: 'ProfilePage' }">Profile</router-link>
  </nav>
</template>


<style>
#nav {
  padding: 30px;
  background-color: rgb(47, 47, 42);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  background-color: transparent;
}

#nav a.router-link-exact-active {
  color: #7797a3;
}
</style>
