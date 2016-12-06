<template> 
  <div class="login">
    <form class="login-form">
      <input placeholder="Enter your username here" type="text" v-model="username">
      <button class="login-button" role="button" href="#" v-on:click.prevent="login"> Log In </button>
    </form>
  </div>
</template>
