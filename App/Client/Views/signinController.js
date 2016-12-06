
var pubnub = require('pubnub');
var PHONE = require('node-pubnub-webrtc');

import template from './signinTemplate.vue';

const Login = {
  template: template.template,
  data () {
    return {
      username: ''
    }; 
  },
  methods: {
    login: function() {

      this.$http.get('/api/user', {params: {username: this.username}})
      .then((res) => { 
        var phone = window.phone = PHONE({
          number: res.body.username, // listen on username line else Anonymous
          publish_key: 'pub-c-97dbae08-7b07-4052-b8e0-aa255720ea8a', // Your Pub Key
          subscribe_key: 'sub-c-794b9810-b865-11e6-a856-0619f8945a4f'// Your Sub Key
        }); 


      })
      .catch((err) => console.error(err));
    },
  }
};

export default Login;
