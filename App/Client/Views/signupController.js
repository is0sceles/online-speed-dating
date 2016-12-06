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
        this.$router.push('/signin');
      })
      .catch((err) => {
        console.error(err);
        this.$router.push('/signup');
      });  
    }
  }
};

export default signup;