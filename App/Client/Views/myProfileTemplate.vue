<template>
    <div>
        <h1>{{$route.params.id}}</h1>
        <div class='profileColumn'>
            <img width=200px height=200px v-bind:src="profileImg">
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
        <div class='eventHorizon'>
            <div>
                <span>Events: Events</span>
                <ul v-for='event in events'>
                    <ul> {{ moment(event.date).format('MMMM Do YYYY, h:mm:ss a') }} </ul>
                    <ul> {{ event.eventName }} </ul>
                    <ul> {{ event.eventType }} </ul>
                </ul>
            </div>
        </div>
        <div class='matchHorizion'>
            <!--<div>
                <span>Matches: Matches</span>
                <<ul v-for='match in matches'>
                    <ul> {{ match.profileImg }}</ul>
                    <ul> {{ match.name }} </ul>
                    <ul> {{ match.location }} </ul>
                </ul>>
            </div>-->
        </div>
        <button v-if='this.$store.state.user.username' v-on:click='editProfile'>Update User Info</button>
        <!--<div>*Place holder for matchs*</div>-->
    </div>
</template>