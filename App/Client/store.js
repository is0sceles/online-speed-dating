import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


var store = new Vuex.Store({
  state: {
    username: 'elliottabirch',
    name: 'elliott',
    age: '25',
    location: 'SF'

  },
  getters: {
    isUsername(state, name) {
      return state.username = name;
    }
  },
  mutations: {
    setUser (state, {age: age, name: name, username: username, location: location, userinfo: userinfo }) {
      state.age = age; state.name = name; state.username = username; state.location = location; state.userinfo = userinfo;
    }
  }
  // action: {
  //   setName ({commit}, name) {
  //     commit(set_Name, name);
  //   }
  // }
});

// console.log(store.state);


export default store;