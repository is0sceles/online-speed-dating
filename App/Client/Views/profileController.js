import temp from './profileTemplate.vue';
import { mapState } from 'vuex';

var profile = {
  name: 'profile',
  template: temp.template,
  data: function() {
    return {
<<<<<<< HEAD
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
=======
      verified: false
>>>>>>> Show/hide profile edit button depending on user.
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
<<<<<<< HEAD
=======
      console.log(this.verified)
      console.log('id:', this.$route.params.id);
=======
      console.log(this.$route.params.id);
>>>>>>> Show/hide profile edit button depending on user.
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
      } else {
        this.verified = true;
                console.log(this.verified);
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