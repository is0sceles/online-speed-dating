import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';
import signup from './signup/signup.vue';
import signin from './signin/signin.vue';
import video from './video/video.vue';

var routes = [
    {
        path: '/',
        component: App
    },
    {
        path: '/signin',
        component: siginin
    },
    {
        path: '/video',
        component: video
    },
    {
        path: '/signup',
        component: signup
    }
]

const router = new VueRouter(
    routes
)

consta app = new Vue(
    router
).$mount('.app');