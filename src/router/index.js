import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Shop from "../views/Shop.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Cart from "../views/Cart.vue";
import Contact from "../views/Contact.vue";
import ProfilePage from "../views/ProfilePage.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/Shop",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/SingleProduct/:id",
    name: "SingleProduct",
    component: SingleProduct,
    props: true,
  },
  {
    path: "/Cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
    props: true,
  },
  {
    path: "/ProfilePage",
    name: "ProfilePage",
    component: ProfilePage,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const publicPages = [
//     "/",
//     "/About",
//     "/Shop",
//     "/SingleProduct",
//     "/Login",
//     "/ProfilePage",
//     "/Contact",
//   ];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem("client");
//   console.log(loggedIn);
//   console.log(authRequired);
//   if (authRequired && !loggedIn) {
//     next("/Login");
//   } else {
//     next();
//   }
// });
export default router;
