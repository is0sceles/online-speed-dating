
import template from './signinTemplate.vue';

const signin = {
  template: template.template,
  data () {
    return {
      username: '',
      password: ''
    }; 
  },
  methods: {
    login: function() {

      this.$http.post('/auth/signin', {
        username: this.username,
        password: this.password 
      })
      .then((res) => { console.log(res); })
      .catch((err) => console.error(err));
    },
  },
  name: 'signin'
};

export default signin;
