<template>
<<<<<<< 1d4592bd5d622420620ab925d9a52e921bf3ac82
  <div>
    <h1>{{$route.params.id}}</h1>
      <div>
        <div>
          <div class='profileImg' v-html='profileImg'></div>
        </div>
		<div>        
		  <span>Name :{{name}}</span>
        </div>
        <div>
	      <span>Gender: {{gender}}</span>
	    </div>
	    <div>
	      <span>Age: {{age}}</span>
	    </div>
	    <div>
	      <span>Location: {{location}}</span>
	    </div>
		<div>
	      <span>Description: {{userinfo}}</span>
	    </div>
	</div>
	<button v-on:click='update'>Update User Info</button>
	<!--<div>*Place holder for matchs*</div>-->
  </div>
=======

	<div>
	<div>{{name}}</div>
	<div>{{username}}</div>
	<div>{{age}}</div>
	<div>{{location}}</div>
	      <button type="submit" class="btn btn-primary btn-block" v-on:click.prevent="setUserInfo">Sign in</button>

	<div>
>>>>>>> implent vuex
</template>