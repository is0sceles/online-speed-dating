<template>
  <div class="container">
    <p id="header"> Sign in for an event </p>
    <form>
      <input type="text" placeholder="Enter your name" v-model="username" >
      <input type="text" placeholder="Enter event type" v-model="eventType" >
      <input type="text" placeholder="Enter event name" v-model="eventName" >
      <input type="datetime-local" placeholder="Enter a date" v-model="date">
      <button role="button" v-on:click.prevent="submit">Submit</button>
    </form>
    <p id="signin_info" class="lead">
      <span id='title'> How does registeration work? </span> <small> Well, let us tell you. Quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
      Cum sociis natoque penatibus. Now go forth and sign up.</small>
        </p>
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
    background: rgba(173, 216, 230, 0.53);
  }
  #signin_info {
    margin-top: 20px;
    background: rgba(255, 255, 255, 0.53);
    padding-left: 10px;
  }
  title {
    font: bold;
    color: #fff;
    background: #ddd;

  }
</style>