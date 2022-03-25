import axios from 'axios';
const API_URL = 'https://artisticly-deadly-heroku.herokuapp.com/Products/';
class AuthService {
  login(client) {
    return axios
      .patch(API_URL + 'login', {
        name: client.name,
        password: client.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('client', JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem('client');
  }
  register(client) {
    console.log(client)
    console.log(API_URL + 'signup')
    return axios.post(API_URL + 'signup', {
      name: client.name,
      email: client.email,
      password: client.password
    });

  }
}
export default new AuthService();