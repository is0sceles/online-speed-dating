import temp from './myProfileTemplate.vue';
import { mapState } from 'vuex';
import moment from 'moment';

var myProfile = {
  name: 'myProfile',
  template: temp.template,
  data: function() {
    return {
      username: '',
      name: '',
      location: '',
      profileImg: '',
      gender: '',
      events: ''
    };
  },
  created () {
    this.loadUserProfile();
    this.getEvents();
  },
  watch: {
    '$route': 'checkRoute'
  },
  methods: {
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
        // console.log(this.$store.getters.getProfileInfo)
        this.setProfileInfo(this.$store.getters.getProfileInfo); 
      } 
    },
    moment (date) {
      return moment(date);
    },
    getEvents () {
      this.$http.get('api/events')
      .then((res)=> {
        this.events = res.body
      })
      .catch((err) => {
        console.log('You have not signed up for any events')
      })
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