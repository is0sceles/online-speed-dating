import temp from './profileTemplate.vue';
import { mapState } from 'vuex';

var profile = {
  name: 'profile',
  template: temp.template,
  data: function() {
    return {
      username: '',
      userinfo: '',
      name: '',
      age: '',
      location: '',
      profileImg: '',
      gender: ''
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