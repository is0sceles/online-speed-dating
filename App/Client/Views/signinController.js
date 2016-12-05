
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
      this.$http.get('/api/users/', {username: this.username})
      .then((res) => {


      })
      .catch((err) => console.error(err));
    },
  }
};

export default Login;
