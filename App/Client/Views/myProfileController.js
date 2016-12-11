import temp from './myProfileTemplate.vue';
import { mapState } from 'vuex';
import moment from 'moment';

var myProfile = {
  name: 'myProfile',
  template: temp.template,
  data: function() {
    return {
      events: '',
      //should be preset to false, but currently match does not exit
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
        // v-on:click="toDate"
    // toDate () {
    //   this.$router.push('/date' + this.id.$oid);
    // },
    editProfile () {
      this.$router.push('/myprofile/' + this.username + '/edit');
    }, 
    setProfileInfo (res) {
      for (var key in res) {
        this[key] = res[key];
      }
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