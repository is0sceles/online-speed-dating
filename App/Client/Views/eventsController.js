import temp from './eventsTemplate.vue';
/* date formatting library */
var moment = require('moment'); 


var events = {
  template: temp.template,
  data () {
    return {
      //these may have to move to create userpage - clear out v-model on template
      username: this.username,
      date: this.date,
      result: ''
    };
  },
  methods: {
    submit ($http) {
      let list = [];
      //this may have to move to create events page
      let body = {
        username: this.username,
        date: this.date
      };
      let dbUrl = '/api/events';
      //this may have to move to create events page
      this.$http.post(dbUrl, body)
      .then((res) => {
        //post to db from here

          //table should hold information about what events a user is registered for
        console.log('inside res: ', res); //delteMe
      })
      .catch((err) => {
        console.error('Something went wrong with POST: ', err);
      });
    },
    getEvents ($http) {
      console.log('accessing events controller'); //deleteMe
      this.$http.get('/api/events')
      .then((res) => { 
        this.result = res.body;
        console.log('server responded with: ', this.result);  //deleteMe
      })
      .catch((err) => { console.error('There was an err with your GET request, ', err); });
    },
    moment: function (date) {
      return moment(date);
    },
  }
};



export default events;