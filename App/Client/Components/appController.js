import temp from '../Templates/appTemp.vue';

var app = {
  template: temp.template,
  data: function() {
    return { 
      msg: 'Welcome To Do-We! ' + this.$store.state.user.username,
      dan: '../Images/dan.png',
      elliott: '../Images/elliott.png',
      eric: '../Images/eric.png',
      wasiff: '../Images/wasiff.png'
    };
  },
  methods: {
    TESTpublish: function() {
      this.$http.post('/event/start', {
        eventId: 1234
      })
      .then((res) => { 
        var body = res.body;
        this.$store.commit('setUser', body);
      })
      .catch((err) => console.error(err)); 
    },
    TESTpublash: function() {
      this.$http.post('/event/setup', {
        eventName: 'Menergy'
      })
      .then((res) => { 
        var body = res.body;
        this.$store.commit('setUser', body);
      })
      .catch((err) => console.error(err)); 
    },
  },
};


export default app;