<template>
  <div class="container">
    <div class="prod-card">
      <div class="row">
        <div class="col-5">
          <div class="img">
            <img src="https://picsum.photos/id/318/320" alt="shirt" />
          </div>
        </div>
        <div class="col-7">
          <div class="prod-info">
            <h2 class="prod-title">Original T-Shirt From Shop</h2>
            <span class="desc">Awesome T-Shirt For Men</span>
            <span class="price"><i class="fas fa-dollar-sign"></i> 449</span>
            <h3>Sizes</h3>
            <span>
              <a href="#">M</a>
              <a href="#">L</a>
              <a href="#">XL</a>
              <a href="#">XXL</a>
            </span>
            <h3>Colors</h3>
            <span>
              <a href="#">Black</a>
              <a href="#">White</a>
              <a href="#">Red</a>
              <a href="#">Blue</a>
            </span>
            <a href="#" class="add"
              ><i class="fas fa-cart-plus"></i> Add to Cart</a
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card w-100">
            <div class="card-body">
              <h5 class="card-title">Comments</h5>
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
  background-color: #fff;
}

.img {
  width: 320px;
  float: left;
  overflow: hidden;
}
.img img {
  width: 100%;
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

@media screen and (min-width: 100px) and (max-width: 799px){}
</style>

