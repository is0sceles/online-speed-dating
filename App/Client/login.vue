<template>
  <div class="login">
    <form class="" action="index.html" method="post">
      <input placeholder="Enter your username here" type="text" v-model="username">
      <button class="login-button" role="button" href="#" v-on:click.prevent="login"> Log In</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: ''
    }
  },
    methods: {
      login: function() {
        console.log(`${this.username} is being routed to the video page`)
        this.$http.get('/api/users/',{username: this.username})
        .then((res) => {
          /*do something once we get 200 OK*/
         })
        .catch((err)=>console.error(err))
    },
  }
}
</script>

<style lang="css">
</style>
