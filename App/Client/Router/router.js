import Vue from 'vue';
import VueRouter from 'vue-router';

import AppTEST from '../appController.js';
import login from '../Views/loginController.js';
import video from '../Views/videoController.js';
import signup from '../Views/signupController.js';
import profile from '../Views/profileController.js';
import profileCreate from '../Views/profileCreationController.js';

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
    path: '/profile/:id',
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

export default router;