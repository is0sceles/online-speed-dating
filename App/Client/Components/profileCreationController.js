import temp from '../Templates/profileCreationTemplate.vue';
import { mapState } from 'vuex';

var profileCreation = {
  template: temp.template,
  name: 'edit',
  data: function() {
    return {
    };
  },

  watch: {
    '$route': 'checkRoute'
  },

  methods: {
    checkRoute () {
      if (this.$route.params.id !== this.$store.state.user.username) {
        console.error('dont do that HO!');
        this.$router.go(-1);
      } else {
        this.$router.push('/myprofile/' + this.$route.params.id + '/edit');
      }
    },

    setUserInfo: function() {
      var body = this.$store.state.user;
      if (!!body.name && !!body.gender && !! body.location) {
        this.$http.put('/api/user', body)
        .then((response) => {
          this.$store.commit('setUser', body);
          this.$router.push('/myprofile/' + body.username);
        })
        .catch((err) => {
        });
      } else {
        window.alert('Please provide name, gender and location');
      }
    }
  },
};

export default profileCreation;