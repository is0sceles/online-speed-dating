import temp from './signupTemplate.vue';

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

      this.$http.post('/api/user', body)  
      .then((response) => {
        this.$route.router.go('/signin'); 
      }, (response) => { });
      this.$route.router.go('/signin');
    }
  }
};

export default signup;