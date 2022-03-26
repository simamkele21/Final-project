<template>
  <div class="container">
    <div class="login">
      <div class="main" onclick="signin()">
        <div class="equal-col">
          <h2>Sign In</h2>
          <div class="form">
            <form @submit="handleLogin" :validation-schema="schema">
              <input
                name="email"
                type="text"
                class="field"
                placeholder="Email"
              /><br />
              <input
                type="password"
                class="field"
                placeholder="password"
              /><br />
              <input type="submit" class="field login1" value="LOGIN" /><br />
              <div class="last">
                <input type="checkbox" class="check" checked /><span class="me"
                  >Remember me</span
                >
                <!-- <span class="forgot">Forgot Password?</span> -->
              </div>
            </form>
          </div>
        </div>
        <div class="border"></div>
        <div class="equal-col second">
          <h2>Create Account</h2>
          <div class="form2">
            <form @submit="handleLogin" :validation-schema="schema">
              <input
                type="text"
                placeholder="First Name"
                class="name-field"
              /><input
                type="text"
                placeholder="Last Name"
                class="name-field"
              /><br />
              <input
                type="password"
                class="fields pass"
                placeholder="Password"
              /><br />
              <input
                type="email"
                class="fields"
                placeholder="Email Address"
              /><br />
              <input
                type="submit"
                class="fields account"
                value="CREATE ACCOUNT"
              /><br />
              <span class="terms"
                >By Creating an Account You Agree to Our Terms</span
              >
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import Client from "../models/ClientModel";

export default {
  name: "Login",
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      name: yup
        .string()
        .required("name is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
    });
    return {
      client: new Client("", ""),
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/ProfilePage");
    }
  },
  methods: {
    handleLogin(client) {
      this.loading = true;
      this.$store.dispatch("auth/Login", client).then(
        () => {
          this.$router.push("/ProfilePage");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>
<style scoped>
.login {
  height: 66vh;
}
.container {
  margin-top: 5em;
  background: transparent;
  border-radius: 7px;
}
.main {
  width: 600px;
  height: 400px;
  background: transparent;
  box-shadow: 2px 2px 10px black;
  position: absolute;
  margin-top: 95px;
  margin-left: 370px;
}
.equal-col {
  width: 298px;
  height: 400px;
  background: transparent;
  float: left;
  box-sizing: border-box;
  padding-top: 60px;
}
.border {
  width: 0px;
  height: 300px;
  border: 1px solid rgb(181, 234, 243);
  background: white;
  float: left;
  margin-top: 50px;
}
h2 {
  color: white;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.form {
  width: 240px;
  height: 300px;
  /*             background: white; */
  position: absolute;
  left: 20px;
}
.form2 {
  width: 240px;
  height: 250px;
  position: absolute;
  left: 40px;
}
.form .field {
  width: 240px;
  padding: 8px;
  box-sizing: border-box;
  outline: none;
  background: transparent;
  color: white;
  margin-top: 15px;
  border: 2px solid rgb(181, 234, 243);
}
.form2 .name-field,
.fields {
  box-sizing: border-box;
  width: 47%;
  background: transparent;
  padding: 8px;
  outline: none;
  border: 2px solid rgb(181, 234, 243);
  position: relative;
  top: 15px;
  color: white;
}
.fields {
  width: 100%;
  top: 13px;
  margin-top: 15px;
}
.form2 .terms {
  color: white;
  font-size: 12px;
  position: relative;
  top: 20px;
}
.name-field:nth-child(2) {
  right: -12px;
}
.second {
  position: relative;
}
::placeholder {
  color: white;
}
.form .login1 {
  background: rgb(64, 226, 255);
  cursor: pointer;
}
.form2 .account {
  background: rgb(64, 226, 255);
  cursor: pointer;
}
.last {
  position: relative;
  width: 240px;
  height: 100px;
  color: white;
  font-size: 13px;
}
.check {
  width: 18px;
  height: 18px;
  margin-top: 10px;
}
.me {
  position: absolute;
  top: 12px;
  margin-left: 5px;
}
.forgot {
  position: absolute;
  right: 0px;
  top: 12px;
}

@media only screen and (max-width: 600px) {
  .login {
    display: flex;
  }
}
</style>
