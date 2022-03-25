<template>
  <div class="about">
    <div class="container" style="padding: 30px">
      <div class="row d-flex justify-content-center">
        <div class="list-group col-8">
          <a
            v-for="product in cart"
            :key="product.id"
            href="#"
            class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          >
            <img :src="product.image" alt height="60" width="60" />
            <p class="h4">{{ product.name }}</p>
            <div class="row">
              <div class="mr-2">
                <p>Unique Price</p>
                <p>R{{ product.price }}</p>
              </div>
              <div class="mr-2">
                <p>Total Price</p>
                <p>R{{ product.price * product.quantity }}</p>
              </div>
              <div>
                <p>Quantity</p>
                <p>{{ product.quantity }}</p>
              </div>
            </div>
          </a>
          <div
            class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          >
            <p class="h4">Total</p>
            <div>
              <p>Total Price</p>
              <p>R{{ totalPrice }}</p>
            </div>
          </div>
          <button class="btn btn-danger" @click="deleteCart()">remove</button>
          <button
            @click="handlecheckout()"
            type="button"
            class="btn btn-primary btn-lg btn-block mt-4"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Products from "@/views/SingleProduct.vue"
export default {
  data() {
        return {
      page: 'Cart',
      products: [],
      name: '',
      email: '',
      message: '',
      cart: JSON.parse(localStorage.getItem('cart'))
    };
  },
  mounted() {
    fetch("https://artisticly-deadly-heroku.herokuapp.com/Products/")
          .then((res) => res.json())
      .then((data) => {
        this.products = data;
        console.log(data, this.products);
      })
  },
    components: {Products}

}
</script>

<style scoped>
.container1 {
  border: 1px solid;
  margin-top: 5.5em;
  width: 700px;
  display: flex;
}
.col {
  border: 1px 1px solid;
  margin-top: 5.5em;
  width: 700px;
}
.about {
  height: 66vh;
}
.img-thumbnail {
  height: 55vh;
}

/* @media screen and (min-width: 100px) and (max-width: 799px); */
</style>
