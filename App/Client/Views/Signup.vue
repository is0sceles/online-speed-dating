<template>
	<div class='sign-up'>
		<form >
		<label>Sign Up</label>
			<input v-model='userName' placeholder='Usename'/>
			<button v-on:click.prevent='signup'>Submit</button>
		</form>
	</div>
</template>

<script>
	export default {
		data () {
			return {
			  userName: ""
		  }
		}, 
		methods: {
			signup: function() {
				var body = {
					username: this.userName,
				};
				console.log(body);
				this.$http.post('/api/users', body)
				.then((response) => {
					this.$route.router.go('/signin');
				},(response) => {
					console.log('Error');
					router.push('signup')
				})
			}
		}
	}
</script>