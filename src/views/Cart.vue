<template>
  <div class="about">
    <div class="container" style="padding: 30px">
      <div class="row d-flex justify-content-center">
        <div class="list-group col-8">
          <a
            v-for="item in cart"
            :key="item.id"
            href="#"
            class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          >
            <img :src="item.imageUrl" alt height="60" width="60" />
            <p class="h4">{{ item.name }}</p>
            <div class="row">
              <div class="mr-2">
                <p>Unique Price</p>
                <p>R{{ item.price }}</p>
              </div>
              <div class="mr-2">
                <p>Total Price</p>
                <p>R{{ item.price * item.quantity }}</p>
              </div>
              <div>
                <p>Quantity</p>
                <p>{{ item.quantity }}</p>
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
          <button
            @click="checkout()"
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
