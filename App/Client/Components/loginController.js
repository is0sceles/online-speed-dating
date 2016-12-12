
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
        //change events into ._id
        var userEvents =[];
        var eventID = this.$store.state.user.events;  
        for(var i = 0; i < eventID.length; i++){
          this.$http.put('/api/user/events', eventID[i])
          .then((res)=> {
            if (res.body._id) {
              userEvents.push(res.body); 
            }
            this.$store.commit('renderEvent', userEvents);
          })
          .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.error(err)); 
    }
  },
  name: 'login'
};

export default login;
