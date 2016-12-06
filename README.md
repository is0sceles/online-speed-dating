# Do-We


The Hot Date Boyz--back at it again!

##Table of Contents
* [Team Members](#team-members)
* [Tech Stack, API's and Third-party Tools](#tech-stack-apis-and-third-party-tools)
* [Folder and File Structure](#folder-and-file-structure)
* [Setting up the Development Environment](#setting-up-the-development-environment)
* [Starting the app](#starting-the-app)
* [System Architecture](#system-architecture)
* [Database Schema](#database-schema)
* [API](#api)
* [Add Publishers](#add-publishers)
* [Worker Description](#worker-description)
* [License](#license)

##Team Members
[![Dan "Keep it in the Kitchen" Gilday](photo)](http://github.com/gildilocks)

[![Elliott "Erect Elliott" Birch](photo)](http://github.com/elliottabirch)

[![Eric "Chris" Lau](photo)](http://github.com/elau002)

[![Wasiff "White Shadow" Afzal](photo)](http://github.com/is0sceles)

##Tech Stack, API's and Third-party Tools
* 
* [Webpack](https://webpack.github.io/) & [Babel](https://babeljs.io/)


##Folder and File Structure

****EXAMPLE*****
    news/
    |
    |--client/
        |
        |--app/
            |
            |--React / Redux
        |
        |--styles/
            |
            |--CSS/MDL
    |
    |--docs/
    |
    |--server/
        |
        |--api/
            |
            |--Nodal Server
        |
        |--static/
            |
            |--Node / Express server

*******EXAMPLE*******

##Setting up the Development Environment

##How to start the app

###Install dependencies: 

####Get API Keys for PubNub

###Starting the app
- [ ] Start your 
- [ ] Open a new terminal window and navigate to the root file of the project
- [ ] run 
- [ ] Open a terminal window and navigate to the root file of the project
- [ ] If this is the first time you are starting the app 
- [ ] run 
- [ ] Open a new terminal window and navigate to the root file of the project
- [ ] run `npm start` 

- [ ] You can now open `http://localhost:4321/`

##System Architecture
![architecture](https://dl.dropboxusercontent.com/s/....)

##Database Schema
![schema](https://dl.dropboxusercontent.com/....)


##API 
Please see the [...md](...md) file

##Do the thing
To do something that our app wants to do

##Worker Description
There are SOME NUMBER OF workers, or services running on in the background on the Node.js server.  Their source code is located in `FILE WHERE WORKERS ARE`.  Below is a description of their respective behaviors.

#####error.js
EXAMPLE This service logs all errors from the static server to a series of log files available at `server/static/logs`

#####master.js
EXAMPLE This service runs every 120 seconds.  It reads the list of publishers and channels, makes a get request to each of those channels checking the last updated date if the last updated date is later than the last time this publisher was updated the master passes this information to parseBot.js and then updates the last_updated field in the database.

#####parseBot.js
EXAMPLE This service receives instructions from master.js.  It gets all the articles listed in the publisher's  RSS feed and updates the articles table in the database with the new information.  parseBot.js also instructs topics.js to perform it's operations.

#####topics.js
EXAMPLE This service interfaces with the Open Calais API.  This API reads the articles provided by topics.js and returns an array of topics that are related to the article. These topics get stored in the topics table, and the art_topics join table is updated.

#####snippetManager.js
EXAMPLE This service runs every 120 seconds.  It makes a query to the database for any articles that don't have any content.  If any are found it then makes a query for the page text, slices the first 150 characters, and stores that in the content field in the database.

##License
???
