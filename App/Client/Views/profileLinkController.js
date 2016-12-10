import temp from './profileLinkTemplate.vue';
import {mapState} from 'vuex';

const profileLink = {
  name: 'profileLink',
  template: temp.template,
  data () {
    return {
    };
  },
  computed: {
    username () {
      return this.$store.state.user.username;
    } 
  },

  methods: {
    goToProfile: function() {
      this.$router.push('/myprofile/' + this.username);
    },   
    editProfile: function() {
      this.$router.push('/myprofile/' + this.username + '/edit');
    },  
    logout: function() {
      this.$router.push('/'); 
      this.$store.commit('clearUser');
      this.$http.get('/auth/logout')
      .then(()=>{

        console.log('logged out');
      });
    }
  },
};

export default profileLink;