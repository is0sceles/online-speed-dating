
import template from '../Templates/loginTemplate.vue';
console.log(template);
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
      console.log('login called');
      this.$http.post('/auth/login', {
        username: this.username,
        password: this.password 
      })
      .then((res) => { 
        var body = res.body;
        this.$store.commit('setUser', body);
        this.$store.commit('setSavedEvents', body.events);
      })
      .catch((err) => console.error(err)); 
    }
  },
  name: 'login'
};

export default login;
