import temp from './profileTemplate.vue';
import { mapState } from 'vuex';

var profile = {
  name: 'profile',
  template: temp.template,
  data: function() {
    return {
<<<<<<< HEAD
      username: '',
      userinfo: '',
      name: '',
      age: '',
      location: '',
      profileImg: '',
      gender: ''
=======
      verified: this.username === this.$route.params.id
>>>>>>> minor testing on page load
    };
  },
  created () {
    this.loadUserProfile();
  },
  watch: {
    '$route': 'loadUserProfile'
  },
  methods: {
    setProfileInfo: function(res) {
      for (var key in res) {
        this[key] = res[key]; 
      }
    },
    loadUserProfile: function() {
<<<<<<< HEAD
=======
      console.log(this.verified)
      console.log('id:', this.$route.params.id);
      console.log(this.$store.state.username);
>>>>>>> minor testing on page load
      if (this.$route.params.id !== this.$store.state.username) {
        this.$http.get(
          '/api/user',
          { params: {username: this.$route.params.id}}
        )
<<<<<<< HEAD
        .then((res)=>{ this.setProfileInfo(res.body); });
      } else { 
        this.setProfileInfo(this.$store.getters.getProfileInfo); 
      } 
=======
        .then((res)=>{
          console.log(res);
          this.$store.commit('setUser', res.body);

        });

      }

    },
    setUserInfo: function() {
      
      this.$store.commit('setUser', {name: 'elliott'});
>>>>>>> Basic Profile Buttons added.
    },
    update: function() {
      this.$router.push('/profileCreate/' + this.username);
    }	
<<<<<<< HEAD
  },
=======
  },``
  created: function() {
    this.loadUserProfile();
  }
>>>>>>> merge issues resolved
};

export default profile;