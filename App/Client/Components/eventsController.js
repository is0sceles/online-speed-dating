import temp from '../Templates/eventsTemplate.vue';
/* date formatting library */
var moment = require('moment'); 


var events = {
  template: temp.template,
  data () {
    return {
      username: this.username,
      date: this.date,
      result: '',
      joined: ''
    };
  },
  created () {
    this.getEvents();
  },
  methods: {
    getEvents () {

      console.log('accessing events controller'); //deleteMe
      this.$http.get('/api/events')
      .then((res) => { 
        this.result = res.body;
        console.log('server responded with: ', this.result);  //deleteMe
      })
      .catch((err) => { console.error('There was an err with your GET request, ', err); });
    },
    join (item) {
      //handles event creation within users array 
      var eventId = item._id;
      var event = item;
      var currentUserEvents = this.$store.state.user.events;
      var savedUserEvents = this.$store.state.savedEvents;

      if (currentUserEvents.indexOf(eventId)=== -1 ) {
        event.usernames.push(this.$store.state.user.username);
        currentUserEvents.push(eventId);
        this.$store.commit('setEvents', currentUserEvents);
        this.$http.put('/api/user', this.$store.state.user)
        .then((res) => { 
          savedUserEvents.push(event);
          this.$store.commit('addToSavedEvents', savedUserEvents);
        })
        .catch((err) => { console.error('error ', err); });
        this.$http.put('/api/events', event)
        .then((res) => { console.log('put on events!'); })
        .catch((err) => { console.error('error ', err); });
      }
    },
    moment: function (date) {
      return moment(date);
    }
  }
};



export default events;