<template>
  <div class="contact">
    <div class="container">
      <div class="row">
        <div class="col-md-5 text-center">
          <div id="details">
            <h1>CONTACT US</h1>
            <p>Cape Town South Africa</p>
            <p>hocic14062@xindax.com</p>
            <p>123-456-7890</p>
          </div>
        </div>
        <div class="col-md-7">
          <div class="contact-form">
            <form @submit.prevent="handleSubmit">
              <label>Name</label>
              <input
                type="name"
                required
                v-model="name"
                placeholder="Enter name"
              />
              <label>Last Name</label>
              <input
                type="surname"
                required
                v-model="surname"
                placeholder="Enter last name"
              />
              <label>Email</label>
              <input
                type="email"
                required
                v-model="email"
                placeholder="Enter email"
              />
              <label>Messege</label>
              <input
                type="message"
                v-model="message"
                placeholder="Enter message"
              />
              <div class="submit">
                <button type="button" class="btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      message: '',
    }
  },
  methods: {
    handleSubmit() {
      console.log(this.name, this.surname, this.email, this.message),
      fetch({ method: 'POST',
        body: JSON.stringify({
          name: this.name,
          surname: this.surname,
          email: this.email, 
          message: this.message,
        }),
        headers: {'Content-Type': 'application/json; chars=UTF-8'},
        })
        .then((response) => response.json())
        .then((json) =>{
          alart(json.msg)
          this.name = '',
          this.surname = '',
          this.email = '',
          this.message =  ''
        })
          .catch((e) => alert(e.msg));
      }
    },
  }
</script>
<style scoped>
.contact {
  height: 76vh;
}
.container {
  /* border: 1px solid; */
  margin-top: 5.5em;
  background: transparent;
  border-radius: 7px;
}

#details {
  height: 0;
  overflow: none;
  padding-bottom: 22.25%;
  margin-top: 190px;
  position: relative;
}
img {
  margin-top: 2.8em;
}
form {
  max-width: 420px;
  margin: 30px auto;
  background: rgb(61, 59, 59);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-radius: 0.5em;
  border-bottom: 1px solid rgb(54, 54, 54);
  color: #555;
}
.half {
  float: left;
  width: 48%;
  margin-bottom: 1em;
}

.right {
  width: 50%;
}

.left {
  margin-right: 2%;
}
.submit {
  margin: 10px;
  padding-left: 120px;
}
.btn {
  background-color: rgb(190, 184, 184);
}

@media (max-width: 480px) {
  .half {
    width: 100%;
    float: none;
    margin-bottom: 0;
  }
}
</style>
