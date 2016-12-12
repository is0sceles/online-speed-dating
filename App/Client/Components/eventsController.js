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
      this.$http.get('/api/events')
      .then((res) => { 
        this.result = res.body;
      })
      .catch((err) => { console.error('There was an err with your GET request, ', err); });
    },

    join (item) {
      //handles event creation within users array 
      var eventId = item._id;
      var event = item;
      var currentUserEvents = this.$store.state.user.events;
<<<<<<< f2f27e2714ba56d7513716c9dd93f0d1da374ddd
      var savedUserEvents = this.$store.state.savedEvents;

      if (currentUserEvents.indexOf(eventId)=== -1 ) {
        event.usernames.push(this.$store.state.user.username);
        currentUserEvents.push(eventId);
        this.$store.commit('setEvents', currentUserEvents);
=======
      var savedUserEvents = this.$store.state.user.savedEvents;
      currentUserEvents.push(eventId);
      this.$store.commit('setEvent', currentUserEvents);
      //update db users
        //check to see if user is already joined
      if (!currentUserEvents.indexOf(eventId)) {
>>>>>>> add compiled to gitignore, and remove console.logs
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