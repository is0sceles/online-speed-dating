<template>
  <div>
    <h1>Profile Update</h1>
      <div>
        <form class='profile-form'>
          <div>
            <input name='name' placeholder='Enter name' type='text' v-model='$store.state.user.name' required>
          </div>
          <div>
            <input name='age' placeholder='age' type='number' v-model='$store.state.user.age' required>
          </div>
          <div>
            <input name='gender' placeholder='Gender' type='text' v-model='$store.state.user.gender' required>
          </div>
          <div>
            <input name='location' placeholder='Where Are You?' type='text' v-model='$store.state.user.location' required>
          </div>
          <div>
            <input name='profileImg' placeholder='Upload a photo' type='text' v-model='$store.state.user.profileImg'required>
          </div>
          <div>
            <input maxlength='200' name='userinfo' placeholder='Tell Us about yourself' type='text' v-model='$store.state.user.userinfo' required>
          </div>       
        </form> 
	  <button v-on:click='setUserInfo'>Save User Info</button>
    </div>
  </div>
</template>