import axios from 'axios';
import authHeader from './AuthHeader';
const API_URL = 'https://artisticly-deadly-heroku.herokuapp.com/Products/';
class ClientService {
  getClientBoard() {
    return axios.get(API_URL + 'client', { headers: authHeader() });
  }
  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}
export default new ClientService();