import temp from './profileTemplate.vue';

var profile = {
  name: 'profile',
  template: temp.template,
  data: function() {
    return {
      username: this.$route.params.id,
      name: '',
      age: '',
      gender: '',
      location: '',
      profileImg: 'profile_img_here',
      userinfo: '',
    };
  },
  methods: {
    loadUserProfile: function() {
      console.log('before page loaded ', this.$route.params.id);
      this.$http.get('/api/user', {params: {username: this.$route.params.id }})
      .then((res) => {
          console.log(res);
        }
      })
      .catch((err) => console.error(err));
    }	
  },
  created: function() {
    console.log(this.$route.params.id);
    this.loadUserProfile();
  }
};

export default profile;