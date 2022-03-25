import AuthService from '../services/AuthService'
const Clients = JSON.parse(localStorage.getItem('Clients'));
const initialState = Clients
  ? { status: { loggedIn: true }, Clients }
  : { status: { loggedIn: false }, Clients: null };
export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, Clients) {
      return AuthService.login(Clients).then(
        Clients => {
          commit('loginSuccess', Clients);
          return Promise.resolve(Clients);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
    register({ commit }, Clients) {
      return AuthService.register(Clients).then(
        response => {
          commit('registerSuccess');
          return Promise.resolve(response.data);
        },
        error => {
          commit('registerFailure');
          return Promise.reject(error);
        }
      );
    }
  },
  mutations: {
    loginSuccess(state, Clients) {
      state.status.loggedIn = true;
      state.Clients = Clients;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.Clients = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.Clients = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    }
  }
};