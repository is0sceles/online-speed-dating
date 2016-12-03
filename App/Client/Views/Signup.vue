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
				$http.post('/api/users', body)
				.then((response) => {
					// this.router.go('/login');
				},(response) => {
					console.log('Error')
				})
			}
		}
	}
</script>