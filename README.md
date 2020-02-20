# Rocketevents
Demo: https://rocketvents.netlify.com/

## Overview

>Rocketevents is a full stack app that allows individuals to create events and sell tickets. The backend repo can be found [here](https://github.com/luisanegri/rocketvents-server)

## UX

The user can Sign Up and Log In to create events. The event should include information about it such as Name, Location, Description, Time, Price, Image, and Date. A list of events can be seen as well as more information about the event.

## Features

* User Authentication
* User Authorisation - only autheticated users can create events 
* Create Event
* List of events
* More info about a specific event
* Responsive

## TODO

* Add comment component to event info page
* Hide links on navigation for logged in users

## Technologies Used

* [Superagent](https://visionmedia.github.io/superagent/)
* [React](https://reactjs.org/)
* [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
* [Redux](https://redux.js.org/)
* [React-Bootstrap](https://react-bootstrap.github.io/)
* [Redux-Thunk](https://github.com/reduxjs/redux-thunk)
* [Express](https://expressjs.com/)
* [Sequelize](https://sequelize.org/)
* [Bcrypt](https://www.npmjs.com/package/bcrypt)
* [Json Web token](https://www.npmjs.com/package/jsonwebtoken)

## Install

1. Clone repository

        git clone [repository url]
        
2. Install dependencies

        npm install
        
3. Start app - FRONTEND AND BACKEND

        npm run start 
        nodemon index.js
        
## Deployment

* Backend - Heroku
* Frontend - Netlify
