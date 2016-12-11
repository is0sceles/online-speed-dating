
<template>
  <div class="message">
    <input v-model='number' type="number">
    <button v-on:click.prevent="TESTcurrentRoundButton(number)" type="submit" class="btn btn-primary btn-block">ROUND GO</button>
    <button v-on:click.prevent="TESTendEventButton" type="submit" class="btn btn-primary btn-block">END THAT QUAN</button>
    
    {{ number }}
     <video v-bind:src= '$store.state.myVideoSrc' autoplay='autoplay'></video>
    <template>
      <button v-on:click.prevent='signalEventReady'>You know what I like the most? Dates!</button>
    </template>
    <template> 
      <transition name='relocate'>
       
        <div v-if = false key='duoView' v-html='myVideo'></div>
      </transition>
      <template>
        <template>
          <div>WAIT</div>
        </template>
        <template>
          <template>
            <button v-on:click.prevent='callCallee'>Let's get this done!</button>
            <div>Please be patient while your date gets readyl</div> 
          </template>
          <template>
            <div>Please be patient while your date gets readyl</div> 
            <button v-on:click.prevent='signalCalleeReady'>I'm ready for a date!</button>
          </template>
        </template>
        <template>
          <div v-html='$store.state.videoOut'></div>
        </template>    
      </template>
        
    </template>
    <template>
      <div>Byeeeeeeeeee</div>
    </template>
  </div>  
</template>     