
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
      // console.log(this.username);
      this.$http.get('/api/user', {params: {username: this.username}})
      .then((res) => {
        console.log(res.body);

      })
      .catch((err) => console.error(err));
    },
  }
};

export default Login;
