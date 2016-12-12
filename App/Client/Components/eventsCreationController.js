import template from '../Templates/eventsCreationTemplate.vue';

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
      var body = {
        username: this.username,
        date: this.date,
        eventType: this.eventType,
        eventName: this.eventName
      };
      let dbUrl = '/api/events';
      this.$http.post(dbUrl, body)
      .then((res) => {
        //clear form fields
        this.username = '',
        this.date = '',
        this.eventType = '',
        this.eventName = '';
        
      })
      .catch((err) => {
        console.error('Something went wrong with POST: ', err);
      });
    },
  }
};

export default eventsCreate;