import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'; 
import Vuex from 'vuex';

import AppTEST from './appController.js';
import login from './Views/loginController.js';
import video from './Views/videoController.js';
import signup from './Views/signupController.js';
<<<<<<< HEAD

=======
import profile from './Views/profileController.js';
<<<<<<< 1d4592bd5d622420620ab925d9a52e921bf3ac82
import profileCreate from './Views/profileCreationController.js';
import Vuex from 'vuex';
>>>>>>> working on updating user info in database
Vue.use(VueResource);
Vue.use(VueRouter);

var store = new Vuex.Store({
  state: {
    username: ''
  },
  getters: {
    isUsername(state) {
      return state.username;
    }
  },
  mutation: {
    set_Name (state, name) {
      state.username = name;
    }
  },
  action: {
    setName ({commit}, name) {
      commit(set_Name, name);
    }
  }
});

Vue.component('login', login);
=======
import store from './store.js';

Vue.use(VueResource);
Vue.use(VueRouter);

console.log(store);

Vue.component('login', login);


>>>>>>> implent vuex


var routes = [

  {
    path: '/',
    component: AppTEST
  },  
  {
    path: '/video',
    component: video
  },
  {
    path: '/signup',
    component: signup

  },
  {
    path: '/profile',
    component: profile,
    name: 'profile'
  },
  {
    path: '/profileCreate/:id',
    component: profileCreate,
    name: profileCreate
  }
];


const router = new VueRouter({

  routes
});



const app = new Vue({
<<<<<<< 1d4592bd5d622420620ab925d9a52e921bf3ac82
=======
  store,
>>>>>>> implent vuex
  router
}).$mount('.app');

