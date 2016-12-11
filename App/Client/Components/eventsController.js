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
      event.usernames.push(this.$store.state.user.username);
      var currentUserEvents = this.$store.state.user.events;
      var savedUserEvents = this.$store.state.user.savedEvents;
      currentUserEvents.push(eventId);
      console.log(event); //deleteMe
      this.$store.commit('setEvent', currentUserEvents);
      
      //update db users
        //check to see if user is already joined
      if (!currentUserEvents.indexOf(eventId)) {
        this.$http.put('/api/user', this.$store.state.user)
        .then((res) => { 
          var checkEvent = item;
          savedUserEvents.push(checkEvent);
          this.$store.commit('renderEvent', savedUserEvents);
        })
        .catch((err) => { console.error('error ', err); });
      }
      //update db events
      this.$http.put('/api/events', event)
      .then((res) => { console.log('put on events!'); })
      .catch((err) => { console.error('error ', err); });
    },
    moment: function (date) {
      return moment(date);
    }
  }
};



export default events;