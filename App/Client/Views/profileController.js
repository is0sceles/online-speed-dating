import temp from './profileTemplate.vue';
import { mapState } from 'vuex';

var profile = {
  name: 'profile',
  template: temp.template,
  data: function() {
    return {
    };
  },
  //mapping local variables to state variables
  computed: mapState(['username', 'name', 'age', 'userinfo', 'location', 'profileImg', 'gender']),
  methods: {
    loadUserProfile: function() {
      console.log('id:', this.$route.params.id);
      console.log(this.$store.state.username);
      if (this.$route.params.id !== this.$store.state.username) {
        this.$http.get(
          '/api/user',
          { params: {username: this.$route.params.id}}
        )
        .then((res)=>{
          console.log(res);
          this.$store.commit('setUser', res.body);

        });

      }
      console.log (this);

    },
    setUserInfo: function() {
      
      this.$store.commit('setUser', {name: 'elliott'});
    },
    update: function() {
      this.$router.push('/profileCreate/' + this.username);
    }	
  },
  created: function() {
    this.loadUserProfile();
  }
};

export default profile;