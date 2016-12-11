import temp from './eventsTemplate.vue';
/* date formatting library */
var moment = require('moment'); 


var events = {
  template: temp.template,
  data () {
    return {
      result: ''
    };
  },
  created () {
    this.getEvents();
  },
  methods: {
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
    }
  }
};



export default events;