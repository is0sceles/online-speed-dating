import Vue from 'vue';
import Login from './Views/login.vue'

const Login = {
  template: Login.template,
  components: { Login },
  data () {
    return {
      username: ''
    }
  },
  methods: {
    login: function() {
      console.log(`${this.username} is being routed to the video page`)
      this.$http.get('/api/users/',{username: this.username})
      .then((res) => {
        console.log(from inside the get then`)
        /*do something once we get 200 OK*/
       })
      .catch((err) => console.error(err))
    },
  }
}

export default Login
