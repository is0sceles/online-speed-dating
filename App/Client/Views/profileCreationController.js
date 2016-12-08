import temp from './profileCreationTemplate.vue';
// import { mapState } from 'vuex';
var profileCreation = {
  template: temp.template,
  name: 'profileCreation',
  data: function() {
    return {
      username: this.$route.params.id,
      name: '',
      age: '',
      gender: '',
      location: '',
      profileImg: '',
      userinfo: '',
    };
  },
  methods: {
    setUserInfo: function() {
      console.log('setting');
      var body = {
        username: this.username,
        name: this.name,
        age: this.age,
        location: this.location,
        profileImg: this.profileImg,
        gender: this.gender,
        userinfo: this.userinfo
      };
      this.$http.put('/api/user', body)
      .then((response) => {
        this.$store.commit('setUser', body);
        this.$router.push('/profile/' + this.username);
      })
      .catch((err) => {

      });
    },
    loadUserProfile: function() {
      this.$http.get('/api/user', {params: {username: this.$route.params.id }})
      .then((res) => {
        var user = res.body;
        if (user.name || user.age || user.location || user.gender || user.profileImg || user.userinfo) {
          this.name = user.name;
          this.age = user.age;
          this.location = user.location;
          this.gender = user.gender;
          this.profileImg = user.profileImg;
          this.userinfo = user.userinfo;
        } 
      })
      .catch((err) => console.error(err));
    }
  },
  created: function() {
    this.loadUserProfile();
  }
};

export default profileCreation;