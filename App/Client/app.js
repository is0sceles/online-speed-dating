import Vue from 'vue';
import App from './appController.js';
import VueRouter from 'vue-router';

import Signup from './Views/signupvue.js';


// import signin from './signin/signin.vue';
// import video from './video/video.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(VueRouter);

console.log(Signup);

var routes = [

  {
    path: '/',
    component: App
  },
  // {
  //     path: '/signin', 
  //     component: siginin
  // },
  // {
  //     path: '/video',
  //     component: video
  // },
  {
    path: '/signup',
    component: Signup
  }
];


const router = new VueRouter({
  routes
});

const app = new Vue({
  router
}).$mount('.app');

