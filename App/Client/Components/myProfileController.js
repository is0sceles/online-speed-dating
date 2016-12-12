import temp from '../Templates/myProfileTemplate.vue';
import { mapState } from 'vuex';
import moment from 'moment';

var myProfile = {
  name: 'myProfile',
  template: temp.template,

  data: function() {
    return {
      savedEvents: '',
      match: true
    };
  },

  created () {
    this.loadUserProfile();
  },
  
  watch: {
    '$route': 'checkRoute'
  },

  methods: {
<<<<<<< c0dfd077d53f4afb3697e4f4b49e51eaff870f04
    toDate (event) {
      this.$router.push('/date/' + event._id + '/active');
    },
=======
>>>>>>> remove zombie code
    editProfile () {
      this.$router.push('/myprofile/' + this.username + '/edit');
    }, 

    setProfileInfo (res) {
      for (var key in res) {
        this[key] = res[key];
      }
      this.savedEvents = this.$store.state.savedEvents;
    },

    loadUserProfile () {
      if (this.$route.params.id !== this.$store.state.user.username) {
        this.$http.get(
          '/api/user',
          { params: {username: this.$route.params.id}}
        )
        .then((res)=>{
          this.setProfileInfo(res.body); 
        });
      } else {
        this.setProfileInfo(this.$store.getters.getProfileInfo); 
      } 
    },

    moment (date) {
      return moment(date);
    },
    
    checkRoute () {
      if (this.$route.params.id !== this.$store.state.user.username) {
        console.error('dont do that HO!');
        this.$router.go(-1);
      } else {
        this.$router.push('/myprofile/' + this.$route.params.id);
      }
    }    
  },

};

export default myProfile;