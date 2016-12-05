import Vue from 'vue';
import  app  from './appVue.js';
import VueRouter from 'vue-router';
// import signup from './signup/signup.vue';
// import signin from './signin/signin.vue';
// import video from './video/video.vue';

// console.log(App)
console.log(app)
Vue.use(VueRouter);
// const app = {
//   template: '<div class="message">{{ msg }}</div>',
//   data: function() {
//     return {
//       msg: 'Hello from vue-loader!'
//     }
//   }
// }


var routes = [
  {
    path: '/',
    component: app
  },
  // {
  //     path: '/signin', 
  //     component: siginin
  // },
  // {
  //     path: '/video',
  //     component: video
  // },
  // {
  //     path: '/signup',
  //     component: signup
  // }
]

const router = new VueRouter({
  routes
})

const app1 = new Vue({
  
  router
}).$mount('.app')