<template>
  <div>
    <span> <h3> Sign in for an event </h3> </span>
    <form>
      <input type="text" placeholder="Enter your name" v-model="username" >
      <input type="text" placeholder="Enter event type" v-model="eventType" >
      <input type="text" placeholder="Enter event name" v-model="eventName" >
      <input type="datetime-local" placeholder="Enter a date" v-model="date">
      <button role="button" v-on:click.prevent="submit">Submit</button>
    </form>
    <p class="lead">
      <span id='title'> How does registeration work? </span> <small> Well, let us tell you. Quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
      Cum sociis natoque penatibus. Now go forth and sign up.</small>
    </p>
  </div>
</template>

<style>
  small {
    margin-left: 5px;
  }
  #title {
    background: lightblue;
  }
  p {
    margin-top: 20px;
  }
  title {
    font: bold;
    color: #fff;
    background: #ddd;

  }
</style>