import { createStore } from "vuex";
import { auth } from "./AuthModule";

export default createStore({
  state: {
    Products: [],
  },
  mutations: {
    setProducts(state, products) {
      state.Products = products;
    },
  },
  modules: {
    auth,
  },
});
