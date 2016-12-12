
import template from '../Templates/loginTemplate.vue';
<<<<<<< f2f27e2714ba56d7513716c9dd93f0d1da374ddd

=======
>>>>>>> add compiled to gitignore, and remove console.logs
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
        var body = res.body;
        this.$store.commit('setUser', body);
<<<<<<< f2f27e2714ba56d7513716c9dd93f0d1da374ddd
        this.$store.commit('setSavedEvents', body.events);
=======
        console.log(body);
        if (body.admin) {
          this.$http.get('/api/events')
          .then((res) => {

          });
        }
        //change events into ._id
        var userEvents = [];
        var eventID = this.$store.state.user.events;  
        for (var i = 0; i < eventID.length; i++) {
          this.$http.put('/api/user/events', {_id: eventID[i]})
          .then((res)=> {
            if (res.body._id) {
              userEvents.push(res.body); 
            }
            this.$store.commit('renderEvent', userEvents);
          })
          .catch((err) => console.log(err));
        }
>>>>>>> add compiled to gitignore, and remove console.logs
      })
      .catch((err) => console.error(err)); 
    }
  },
  name: 'login'
};

export default login;
