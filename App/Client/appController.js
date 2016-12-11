import temp from './appTemp.vue';

var app = {
  template: temp.template,
  data: function() {
    return { 
<<<<<<< f679d1a822f7a5027ea85c2df021ebd7f06f5a0d
      msg: 'Welcome To Do-We! ' + this.$store.state.user.username
=======
      msg: 'Welcome To Do-We! ' + this.$store.state.user.username,
      dan: '../Images/dan.png',
      elliott: '../Images/elliott.png',
      eric: '../Images/eric.png',
      wasiff: '../Images/wasiff.png'
>>>>>>> create landing page
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