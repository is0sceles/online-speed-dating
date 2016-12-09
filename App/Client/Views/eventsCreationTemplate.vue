<template>
  <div>
    <span> <h3> Sign in for an event </h3> </span>
    <form>
      <input type="text" placeholder="enter your name" v-model="username" >
      <input type="text" placeholder="enter event type" v-model="eventType" >
      <input type="text" placeholder="enter event type" v-model="eventName" >
      <input type="datetime-local" placeholder="enter a date" v-model="date">
      <button role="button" v-on:click.prevent="submit">Submit</button>
    </form>
    <p class="lead">
      <span id='title'> How does registeration work? </span> <small>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus.</small>
    </p>
  </div>
</template>

<style>
  p {
    margin-top: 20px;
  }
  title {
    font: bold;
    color: #fff;
    background: #ddd;

  }
</style>