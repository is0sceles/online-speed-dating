# PubNub

We used PubNub as the control system for connecting users to each other in our app. The [diagram](#diagram) below lays out the flow of signals in the app.
In its current form, an admin user will run functions which cause a pubnub instance on the server to emit messages which are in turn listened for by pubnub instances on each client.
These signals trigger functions which allow users to connect and progress through a series of video calls. 

##Table of Contents
* [Official Documentation](#official-documentation)
* [Diagram](#diagram)

##Official Documentation
* [PubNub for Javascript](https://www.pubnub.com/docs/javascript/pubnub-javascript-sdk-v4)
* [PubNub for Node](https://www.pubnub.com/docs/nodejs-javascript/pubnub-javascript-sdk)
* [PubNub with WebRTC](https://github.com/stephenlb/webrtc-sdk/)
* [PubNub For Developers](https://www.pubnub.com/docs)

##Diagram
![PubNubDiagram](https://dl.dropboxusercontent.com/content_link/3nhTzcAbs6U1cXtRHGLwntIgwguuRLbtBaf93UonAerq3gTcNDQbZ0rtsT0sCwmD/file)