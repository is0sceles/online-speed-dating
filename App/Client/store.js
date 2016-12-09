import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


var store = new Vuex.Store({
  state: {
    user: {
      username: '',
    }
  },
  getters: {
    getProfileInfo(state, name) {
      return state.user;
    }
  },
  mutations: {
    clearUser (state) {
      state.user = {
        username: ''
      };
    },
    setUser (state, obj) {
      for (var key in obj) {
        state.user[key] = obj[key];
      }
      console.log(state);
    }
  }
  // action: {
  //   setName ({commit}, name) {
  //     commit(set_Name, name);
  //   }
  // }
});



export default store;