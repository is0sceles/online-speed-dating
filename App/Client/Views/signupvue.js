import temp from './Signup.vue';

var signup = {
  template: temp.template,
  data: function() {
    return {
      username: ''
    };
  },
  methods: {
    signup: function($http) {
      var body = {
        username: this.userName,
      };
      console.log(body);
      this.$http.post('/api/user', body)
			.then((response) => {
       console.log('here?')
				console.log(this.router)
        this.$route.router.go('/login');
}, (response) => {
			console.log('Error')
});
    }
  }
};

export default signup;