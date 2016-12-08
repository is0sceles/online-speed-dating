import temp from './eventsTemplate.vue';



var events = {
  template: temp.template,
  data () {
    return {
      username: this.username,
      date: this.date,
      time: '',
      eventName: '',
      eventType: '',
    };
  },
  methods: {
    submit ($http) {
      let list = [];
      let body = {
        username: this.username,
        date: this.date
      };
      let dbUrl = '/api/user';
      console.log(body);
      this.$http.post(dbUrl, body)
      .then((res) => {
        //post to db from here
        //go create the schema first 
          //table should hold information about what events a user is registered for
        console.log('inside res: ', res);
      })
      .catch((err) => {
        console.log('inside err: ', err);
      });
    }
  }
};



export default events;