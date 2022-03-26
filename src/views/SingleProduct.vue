<template>
  <div class="container">
    <div class="prod-card">
      <div class="row">
        <div class="col-5">
          <div class="img">
            <img :src="product.image" :alt="product.name" />
          </div>
        </div>
        <div class="col-7">
          <div class="prod-info">
            <h2 class="prod-title">{{ product.name }}</h2>
            <span class="desc">{{ product.description }}</span>
            <span class="price">R{{ product.price }}</span>
            <h3>Sizes</h3>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">M</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">L</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">XL</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">L</label>
            </div>
            <h3>Colors</h3>
            <form action="color">
              <select name="Color" id="Color">
                <option value="Black">Black</option>
                <option value="White">White</option>
                <option value="Blue">Blue</option>
                <option value="Brown">Brown</option>
              </select>
            </form>
            <a @click="AddToCart()" class="add"
              ><i class="fas fa-cart-plus"></i> Add to Cart</a
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card w-100">
            <div class="card-body">
              <h5 class="card-title">Comment's</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <div class="form-outline">
                <input
                  type="text"
                  id="form16"
                  class="form-control"
                  data-mdb-showcounter="true"
                  maxlength="50"
                />
                <label class="form-label" for="form16">Add comment</label>
                <div class="form-helper"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Cart from "../views/Cart.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
    product: [],
      Cart: JSON.parse(localStorage.getItem("Cart")),
    };
  },
  computed: { Cart },

  mounted() {
    fetch("https://artisticly-deadly-heroku.herokuapp.com/Products/" + this.id)
      .then((res) => res.json())
      .then((data) => {
        this.product = data;
        console.log(data);
      });
  },
  components: { Cart },
  methods: {
    removeItem(product) {
      this.Cart.splice(this.Cart.indexOf(product), 1);
    },
    AddToCart() {
      this.Cart.push(this.product);
      localStorage.setItem("Cart", JSON.stringify(this.Cart));
      localStorage.getItem("Cart");
      console.log(console.log(JSON.parse(localStorage.getItem("Cart"))));
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 5.5em;
  height: 65vh;
}

.prod-card {
  width: 900px;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(230, 223, 223);
}

.img {
  width: 320px;
  float: left;
  overflow: hidden;
}
.img img {
  width: 100%;
  margin: 30px;
}

.prod-title {
  font-size: 30px;
  margin-bottom: 10px;
  font-weight: bold;
}

.prod-info {
  float: left;
  padding: 20px 40px;
}
.prod-info span {
  display: block;
  overflow: hidden;
  margin: 4px;
}
.prod-info span a {
  display: block;
  float: left;
  padding: 2px 4px;
  margin-right: 6px;
  border: 2px solid;
  color: #e67e22;
  font-size: 20px;
  border-radius: 8px;
}

.desc {
  font-size: 20px;
  color: #95a5a6;
}

.price {
  color: #2980b9;
  font-size: 40px;
  font-weight: 700;
}

.add {
  width: 260px;
  font-size: 24px;
  color: white;
  background: #2c3e50;
  display: block;
  float: left;
  padding: 8px;
  text-align: center;
  margin: 8px 0;
  transition: opacity 0.4s;
}
.add:hover {
  opacity: 0.7;
}

@media screen and (min-width: 100px) and (max-width: 799px) {
}
</style>
