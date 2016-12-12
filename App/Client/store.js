import Vue from 'vue';
import Vuex from 'vuex';
import PubNub from 'pubnub';
import PHONE from './Dependencies/pubnubWebrtc.js';

Vue.use(Vuex);


var store = new Vuex.Store({
  state: {
    user: {
      username: '',
    },
    videoOut: '<video></video>',
    myVideoSrc: '',
    beforeEventFlag: true,
    soloViewFlag: true,
    calleeReadyFlag: false,
    activeViewFlag: true,
    beforeStartFlag: true,
    datePartnerOffline: false,
    currentRound: null,
    savedEvents: []
  },
  getters: {
    getProfileInfo(state, name) {
      return state.user;
    }
  },
  mutations: {
    clearUser (state) {
      state.user = {
        username: ''
      };
    },
    setUser (state, obj) {
      for (var key in obj) {
        state.user[key] = obj[key];
        console.log(state.isCallerFlag = obj.callList[0]);
        state.isCallerFlag = obj.callList[0];
      }
      console.log(state);
    },
    initPubNub (state) {
      state.pubnub = new PubNub({
        publishKey: 'pub-c-97dbae08-7b07-4052-b8e0-aa255720ea8a', // Our Pub Key
        subscribeKey: 'sub-c-794b9810-b865-11e6-a856-0619f8945a4f', // Our Sub Key
        ssl: true
      });
      state.pubnub.addListener({
        message: function(message) {
          console.log(message.message);
          if (message.message === 'Ready') {
            console.log('GotReadyMessageFromPartner');
            state.calleeReadyFlag = true;
          } else if (message.message === 'End') {
            console.log('Got End MESSAGE');
            state.activeViewFlag = false;
            state.pubnub.stop();
            state.phone.hangup();
            
            state.phone.mystream.getVideoTracks()[0].stop();

          } else {
            console.log('This is round', message.message);
            state.phone.hangup();
            if (state.currentRound) {
              state.pubnub.unsubscribe({
                channels: ['eventId' + state.user.callList[state.currentRound]]
              });
            }
            console.log(message.message);
            state.currentRound = message.message;
          //possibly check if corresponding user is online currently--use presence to do this
          //alternatively use failed call error handling
            if (state.user.callList[0]) { 
              state.pubnub.subscribe({
                channels: ['eventId' + state.user.callList[state.currentRound]]
              });
            }
            state.soloViewFlag = true;
            state.beforeStartFlag = false;
            state.calleeReadyFlag = false;
          }    
        },
        status: function(statusEvent) {
          console.log(statusEvent);
        }
      });
    },
    initPhone (state) {
      state.phone = window.phone = new PHONE({
        number: state.user.username, 
        publish_key: 'pub-c-97dbae08-7b07-4052-b8e0-aa255720ea8a', // ff Our Pub Key
        subscribe_key: 'sub-c-794b9810-b865-11e6-a856-0619f8945a4f', // Our Sub Key
        ssl: true
      });

      var sessionConnected = function(session) {
        console.log('connected with', session);
        state.videoOut = session.video.outerHTML;
      }; 
      state.phone.ready(function() {
        state.myVideoSrc = URL.createObjectURL(phone.mystream);
        console.log('phone ready');
        console.log(state.myVideo);
        
      });
      state.phone.receive(function(session) {
        state.soloViewFlag = false;
        console.log( 'i receieved', session);
        state.videoIn = session;

        session.connected(sessionConnected);
        session.ended(function(idk) {
          console.log('sessionn ended', idk);
        });
      });
    },
    signalEventReadyFlags (state) {
      state.beforeStartFlag = true;
      state.beforeEventFlag = false;
      state.soloViewFlag = true;
      state.activeEventFlag = true;
    },
    signalCalleeReadyFlag (state) {
      state.calleeReadyFlag = true;
    },
    setEvents (state, arr) {
      state.user.events = arr;
    },
    setSavedEvents (state, arr) {
      state.savedEvents = arr;
    }
  }
});

export default store;