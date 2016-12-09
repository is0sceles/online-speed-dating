
import template from './loginTemplate.vue';

const login = {
  template: template.template,
  data () {
    return {
      username: '',
      password: ''
    }; 
  },
  methods: {
    login: function() {
      this.$http.post('/auth/login', {
        username: this.username,
        password: this.password 
      })
      .then((res) => {
        console.log(res.body);
        var body = {
          username: res.body.username,
          loggedIn: true
        }
        this.$http.put('/api/user', body)
        .then((response) => {
          this.$store.commit('setUser', res.body);
          this.$router.push('/profile/' + res.body.username)
        });
      })
      .catch((err) => console.error(err)); 
    },
  },
  name: 'login'
};

export default login;
