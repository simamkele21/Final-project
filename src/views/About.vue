<template>
  <div class="about">
    <div class="container">
      <h1>OUR STORY</h1>

      <p>
        Shopping online has never been more rewarding. Our selection of fashion
        goods includes stunning pieces for every occasion, size or budget. Our
        retail experts go far and beyond to create our breathtaking, creative
        collections, and our customer service team will make sure that your
        expectations are not just met, but exceeded.
      </p>
      <br />
      <p>
        Thanks to our innovative and service-oriented approach, Artisticly
        deadly has been highly successful since day one. Browse our site and get
        in touch if you need any assistance. Happy shopping!
      </p>
      <button type="button" class="btn btn-primary">
        <router-link :to="{ name: 'Contact' }">Contact</router-link>
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid;
  margin-top: 5.5em;
}
.about {
  height: 66vh;
}

@media screen and (min-width: 100px) and (max-width: 799px);
</style>
