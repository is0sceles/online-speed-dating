<template>
  <div class="container eventCreation">
    <p id="header"> Sign in for an event </p>
    <form>
      <input type="text" placeholder="Enter your name" v-model="username" >
      <input type="text" placeholder="Enter event type" v-model="eventType" >
      <input type="text" placeholder="Enter event name" v-model="eventName" >
      <input type="datetime-local" placeholder="Enter a date" v-model="date">
      <button role="button" v-on:click.prevent="submit">Submit</button>
    </form>
  </div>
</template>

<style>
  #header{
    font-size: 20px;
    font-weight: 400;
    background: #5d868a;
    width: 30%;
    padding: 10px 10px 10px 10px;
    color: #fff;
  }
  small {
    margin-left: 5px;
  }
  #title {
    background: rgba(173, 216, 230,1);
  }
  
  .eventCreation {
    background: #5d868a;
    height: 150px;
  }
  /*
  #signin_info {
    margin-top: 20px;
    background: rgba(255, 255, 255,1);
    padding-left: 10px;
  }
  */
  title {
    font: bold;
    color: #fff;
    background: #ddd;

  }
</style>