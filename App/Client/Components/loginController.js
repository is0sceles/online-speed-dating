
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
        var userEvents = [];
        var eventID = this.$store.state.user.events;  
        for(var i = 0; i < eventID.length; i++){
          console.log(eventID[i]);
          this.$http.get('/api/user/events', {params: {_id: eventID[i]}})
          .then((res)=> {
            if (res.body._id) {
              userEvents.push(res.body); 
            console.log(res.body);
            }
            this.$store.commit('setSavedEvents', userEvents);
            console.log('store is', this.$store.state.savedEvents)
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
