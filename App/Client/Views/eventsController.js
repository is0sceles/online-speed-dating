import temp from './eventsTemplate.vue';



var events = {
  template: temp.template,
  data () {
    return {
      username: '',
      date: '',
      event: {
        time: '',
        eventName: 'linkedList',
        eventType: '',
        users: []
      }
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
        //post to db
        console.log('inside res: ', res);
      })
      .catch((err) => {
        console.log('inside err: ', err);
      });
    }
  }
};



export default events;