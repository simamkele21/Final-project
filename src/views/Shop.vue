<template>
  <div class="shop">
    <div class="container">
      <div class="card">
        <div
          class="bg-image hover-overlay ripple"
          data-mdb-ripple-color="light"
        >
          <img
            src="https://i.postimg.cc/c4zbtsQj/Artisticly.png"
            class="img-fluid"
          />
          <router-link :to="{ name: 'SingleProduct' }">
            <div
              class="mask"
              style="background-color: rgba(251, 251, 251, 0.15)"
            ></div
          ></router-link>
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a class="btn">
            <router-link :to="{ name: 'SingleProduct' }">Buy now</router-link>
          </a>
        </div>
      </div>
      <!-- <div class="card">
        <div class="img">
          <img src="https://i.postimg.cc/c4zbtsQj/Artisticly.png" alt="" />
        </div>
        <div class="content">
          <h3>name</h3>
          <h2>price</h2>
          <a href="#!" class="btn">
            <router-link :to="{ name: 'SingleProduct' }">Buy now</router-link>
          </a>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.container {
  /* border: 1px solid; */
  margin-top: 5.5em;
}
.about {
  height: 66vh;
}
.card {
  position: relative;
  width: 320px;
  height: 420px;
  background: #122936;
  border-radius: 20px;
  overflow: hidden;
}

.card .img {
  width: 50%;
  height: 20px;
}
@media screen and (min-width: 100px) and (max-width: 799px);
</style>
