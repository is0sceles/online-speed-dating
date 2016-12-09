import Vue from 'vue';
import VueResource from 'vue-resource'; 
import VueRouter from 'vue-router';

import router from './Router/router.js';
import store from './store.js';

import login from './Views/loginController.js';
import profileLink from './Views/profileLinkController.js';

import Vuex from 'vuex';

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.component('login', login);
Vue.component('profilelink', profileLink);


const app = new Vue({
  store,
  router
}).$mount('.app');

