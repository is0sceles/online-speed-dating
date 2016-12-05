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

<<<<<<< e234507113d5ea7549cbfcc5e052e049e45512e1
const app = new Vue({
<<<<<<< 3b5258d3cd194dc49956eabffcad0f0a660ebeed
  router
}).$mount('.app');

=======
=======
const app = new Vue(
>>>>>>> fixed typo
    router
}).$mount('.app')
>>>>>>> fixed merge conflict with app.js
