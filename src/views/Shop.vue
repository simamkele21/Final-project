<template>
  <div class="shop">
    <div class="container" v-for="product in products" :key="product.id">
      <div class="card" v-if="product">
        <div
          class="bg-image hover-overlay ripple"
          data-mdb-ripple-color="light"
        >
          <img :src="product.image" class="img-fluid" :alt="product.name" />
          <router-link
            :to="{ name: 'SingleProduct', params: { id: product._id } }"
          >
            <div
              class="mask"
              style="background-color: rgba(251, 251, 251, 0.15)"
            ></div
          ></router-link>
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">{{ product.price }}</p>
          <a class="btn">
            <router-link
              :to="{ name: 'SingleProduct', params: { id: product._id } }"
              >Buy now</router-link
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Products",

  data() {
    return {
      page: "Product",
      products: [],
    };
  },
  mounted() {
    fetch("https://artisticly-deadly-heroku.herokuapp.com/Products")
      .then((res) => res.json())
      .then((data) => {
        this.products = data;
        console.log(this.products);
      });
  },
};
</script>

<style scoped>
.container {
  /* border: 1px solid; */
  margin-top: 5.5em;
}
.shop {
  height: 74vh;
  display: flex;
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
.btn {
  background-color: rgb(190, 184, 184);
}
@media screen and (min-width: 100px) and (max-width: 799px) {
}
</style>
