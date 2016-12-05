<template>
	<div class='sign-up'>
		<form >
		<label>Sign Up</label>
			<input v-model='userName' placeholder='Usename'/>
			<button v-on:click.prevent='signup'>Submit</button>
		</form>
	</div>
</template>

// <script>
// 	export default {
// 		data () {
// 			return {
// 			  userName: ""
// 		  }
// 		}, 
// 		methods: {
// 			signup: function($http) {
// 				var body = {
// 					username: this.userName,
// 				};
// 				console.log(body);
// 				this.$http.post('/api/user', body)
// 				.then((response) => {
// 					console.log('here?')
// 					console.log(this.router)
// 					this.$route.router.go('/login');
// 				},(response) => {
// 					console.log('Error')
// 				})
// 			}
// 		}
// 	}
// </script>
