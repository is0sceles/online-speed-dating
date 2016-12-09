import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


var store = new Vuex.Store({
  state: {
    username: '',
    userinfo: '',
    name: '',
    age: '',
    location: '',
    profileImg: '',
    gender: '',
    admin: '',
  },
  getters: {
    getProfileInfo(state, name) {
      var userInfo = {
        username: state.username,
        userinfo: state.userinfo,
        name: state.name,
        age: state.age,
        location: state.location,
        profileImg: state.profileImg,
        gender: state.gender
      };
      return userInfo;
    }
  },
  mutations: {
    setUser (state, {username, userinfo, name, age, location, profileImg, gender, admin, loggedIn}) {
      state.age = age; 
      state.profileImg = profileImg; 
      state.name = name; 
      state.username = username; 
      state.location = location; 
      state.userinfo = userinfo;
      state.gender = gender;
    }
  }
  // action: {
  //   setName ({commit}, name) {
  //     commit(set_Name, name);
  //   }
  // }
});



export default store;