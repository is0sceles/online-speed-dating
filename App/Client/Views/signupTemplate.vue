<template>
	<div class='sign-up'>
		<form >
		<label>Sign Up</label>
			<input v-model='username' placeholder='Username'/>
			<button v-on:click.prevent='signup'>Submit</button>
		</form>
	</div>
</template> 

