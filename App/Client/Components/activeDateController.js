
import template from '../Templates/activeDateTemplate.vue';

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
      },
      number: null

    }; 
  },
  methods: {
    signalEventReady: function() {
      var eventId = this.event._id.$oid;
      console.log(eventId);
      //create instance of PubNub
      this.$store.commit('initPubNub');
      //create our Phone instance
      this.$store.commit('initPhone');
      //subscribe our pubnub to the channels that control calls
      console.log(this.$store.state.pubnub);
      this.$store.state.pubnub.subscribe({
        channels: [eventId],
        withPresence: true, // also subscribe to presence instances.
      });

      this.$store.commit('signalEventReadyFlags');
    },
    signalCalleeReady: function() {
      this.$store.state.pubnub.publish({

        message: 'Ready',
        channel: 'eventId' + this.$store.state.user.username
        
      });
      this.$store.commit('signalCalleeReadyFlag');
    },
    callCallee: function() {
      this.$store.state.phone.dial(this.$store.state.user.callList[this.$store.state.currentRound]);
    },
    TESTcurrentRoundButton: function(number) {
      this.$store.state.pubnub.publish({
        message: number,
        channel: [this.event._id.$oid]
      });
    },
    TESTendEventButton: function() {
      this.$store.state.pubnub.publish({
        message: 'End',
        channel: [this.event._id.$oid]
      });

    }
  },
  name: 'activeDate'
};

export default activeDate;