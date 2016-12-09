import template from './eventsCreationTemplate.vue';

var eventsCreate = {
  template: template.template,
  data () {
    return {
      username: '',
      date: '',
      eventType: '',
      eventName: ''
    };
  },
  methods: {
    submit ($http) {
      let list = [];
      let body = {
        username: this.username,
        date: this.date,
        eventType: this.eventType,
        eventName: this.eventName
      };
      let dbUrl = '/api/events';
      this.$http.post(dbUrl, body)
      .then((res) => {
        //post to db from here

        console.log('inside res: ', res); //deleteMe
      })
      .catch((err) => {
        console.error('Something went wrong with POST: ', err);
      });
    },
  }
};

export default eventsCreate;