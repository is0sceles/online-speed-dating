
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
        var body = res.body;
        this.$store.commit('setUser', body);
        //change events into ._id
        var userEvents =[];
        var eventID = this.$store.state.user.events  
        for(var i = 0; i < eventID.length; i++){
          this.$http.put('/api/user/events', {eventName: eventID[i]})
          .then((res)=> {
            if(res.body.eventName){
              userEvents.push(res.body);
            }
            this.$store.commit('setEvent', userEvents);
          })
          .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.error(err)); 
    },
  },
  name: 'login'
};

export default login;
