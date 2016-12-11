<template>
    <div class="message">
        <input v-model='number' type="number">
        <button v-on:click.prevent="TESTcurrentRoundButton(number)" type="submit" class="btn btn-primary btn-block">ROUND GO</button>
        <button v-on:click.prevent="TESTendEventButton" type="submit" class="btn btn-primary btn-block">END THAT QUAN</button>
        <template v-if='$store.state.beforeEventFlag'>
            <button v-on:click.prevent='signalEventReady'>You know what I like the most? Dates!</button>
        </template>
        <template v-else-if='$store.state.activeViewFlag'>
            <transition name='relocate'>
                <video v-if='$store.state.soloViewFlag' v-bind:src='$store.state.myVideoSrc' key='soloView' autoplay='autoplay'></video>
                <video v-else v-bind:src='$store.state.myVideoSrc' key='duoView' autoplay='autoplay'></video>
            </transition>
            <template v-if='$store.state.soloViewFlag'>
                <template v-if='$store.state.beforeStartFlag'>
                    <div>WAIT</div>
                </template>
                <template v-else>
                    <template v-if='$store.state.isCallerFlag'>
                        <button v-if='$store.state.calleeReadyFlag' v-on:click.prevent='callCallee'>Let's get this done!</button>
                        <div v-else>Please be patient while your date gets readyl</div>
                    </template>
                    <template v-else>
                        <div v-if='$store.state.calleeReadyFlag'>Please be patient while your date gets readyl</div>
                        <button v-else v-on:click.prevent='signalCalleeReady'>I'm ready for a date!</button>
                    </template>
                </template>
            </template>
            <template v-else>
                <div v-html='$store.state.videoOut'></div>
            </template>

        </template>
        <template v-else>
            <div>Byeeeeeeeeee</div>
        </template>
    </div>
</template>
