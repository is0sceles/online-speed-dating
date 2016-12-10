
import template from './activeDateTemplate.vue';

const activeDate = {
  template: template.template,
  data () {
    return {
      event: {
        '_id': {
          '$oid': '584c66806dd04c5f1e5b1408'
        },
        'date': {
          '$date': '1970-01-01T00:00:02.016Z'
        },
        'eventCallDuration': 300000,
        'eventName': 'Menenergy',
        'eventType': 'All',
        'usernames': [
          0,
          1, 
          2
        ],
        '__v': 0
      }

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
      })
      .catch((err) => console.error(err)); 
    },
    eventReady: function() {
      var eventId = this.event._id.$oid;
      console.log(eventId);
      //create instance of PubNub
      this.$store.commit('initPubnub');
      //subscribe our pubnub to the channels that control calls
      console.log(this.$store.state.pubnub);
      this.$store.state.pubnub.subscribe({
        channels: [eventId + '_start', eventId + '_round', eventId + '_end' ],
        connect: function() { console.log('success'); },
        withPresence: true, // also subscribe to presence instances.
        
      });

      
    }
  },
  name: 'activeDate'
};

export default activeDate;