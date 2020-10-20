# Project Name

Homework 17 - Fitness Tracker

# Table of contents

- [Project Name](#project-name)
- [Table of contents](#table-of-contents)
- [General info](#general-info)
- [Video Demo](#video-demo)
- [Features](#features)
- [User Guide](#user-guide)
- [Code Style](#code-style)
- [Technology](#technology)
- [Local File Description](#local-file-description)
- [Status](#status)
- [Create By](#create-by)

# General info

This application is serving as a dashboard in order to keep track the users workout activities and transform the data in a graphical dimention.

For the feature of the site, please visit the [Features](#features) section for more details.

# Video Demo

![fitness tracker demo](./public/assets/image/fitnesstracker.gif)

You might also visit the following youtube link for the demo:
[fitness tracker demo](https://youtu.be/QznGrO0OdtU)

# Features

In this application, the following features have been applied:

1. All the data is read from or written from the fitness database (MongoDB)
2. The user can perform the following function from this application:
   1. Add a new workout - a new workout will be added with the selection of the the exercise(s).
   2. Continue the last Workout - the user can go back to the previous workout session to add extra exercise(s) if needed.
   3. Check the Summary dashboard - the user can go the dashboard to look at the workout summary in the last 7 days.

# User Guide

1. The user can add a new workout by clicking "New Workout" button in the main page. User can all one or multiple exerise(s) under the new workout record.
2. The user can add one or multiple exercise(s) by clicking "Continue Workout" button in the main page.
3. The user can click the "Fitness Tracker Dashboard" to visit the dashboard page with all the graphical distrubution for the exercise(s) performed.

# Code Style

Standard

# Technology

The following technology have been used for this project:

1. [JavaScript](https://www.javascript.com/)
2. [NodeJS](https://nodejs.org/en/)
3. [NPM](https://www.npmjs.com/)
   - The following application from NPM have been used:
   1. [mongoose](https://mongoosejs.com/)
   2. [Express](https://expressjs.com/)
4. [MongoDB](https://www.mongodb.com/)
5. [CSS](https://www.w3.org/Style/CSS/)
6. [Bootstrap](https://getbootstrap.com/)

# Local File Description

Below are the description for all local files:

1. Main folder:
   1. server.js - A JS file for setting up the route to "apiRoute.js" and "htmlRoute.js", listen to the port, link to the database and public files (i.e. frontend files: CSS and JS)
   2. package.json - A file keep the project details
2. Model:
   1. index.js - The JS file keeps the module for the schema
   2. workout.js - A JS file to keep all the schema setup for the workout collection insdie the fitness tracker database
3. Public:
   1. Main:
      1. exercise.html - the html for the exercise page
      2. index.html - the html for the landing page
      3. stats.html - the html for the dashboard page
   2. Assets:
      1. CSS:
         1. style.css - the CSS styling file for the html output
      2. Image - Keep all the images
      3. frontendjs:
         1. api.js - the js file to keep all the fetch call for the backend route
         2. exercise.js - the js file to keep all the function for the exercise creation
         3. index.js - the js file to keep the function of the new workout setup
         4. stats.js - the js file to keep all the functions for the dashboard
         5. workout.js - the js file to keep all the function for the new workout
4. Route:
   1. apiRoute.js - the routing setup for all the api call from the frontend
   2. htmlRoute.js - the routing setup for all the html renderation
5. Seeders:
   1. seed.js - The file that keep the seed data and run the sed data to the database by "npm run seed"

# Status

Project status: finished

# Create By

Created by Chung Hei Fuk
