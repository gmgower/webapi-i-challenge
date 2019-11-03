// implement your API here
// https://youtu.be/iNtm78tLjuo

//? s2 install express (yarn add express)

//? s3 node.js uses require to bring external module
// require the express npm module, needs to be added to the project using "yarn add" or "npm install"
const express = require('express'); // ? equivalent to  import express from 'express'

//? s4 create express app server
// creates an express application using the express module
const server = express();


//? s6 create endpoint
// configures our server to execute a function for every GET request to "/"
// the second argument passed to the .get() method is the "Route Handler Function"
// the route handler function will run on every GET request to "/"
server.get('/', (req, res) => {
    // express will pass the request and response objects to this function
    // the .send() on the response object can be used to send a response to the client
    res.send('Hello World');
  });

  //? s8 creat JSON with a simple string create endpoint
  server.get('/hobbits', (req, res) => {
      const hobbits = [
          {
              id: 1,
              name: 'Samwise Gamgee'
          },
          {
              id: 2, 
              name: 'Frodo Baggins'
          }
      ];

      //? states codes
      res.status(200).json(hobbits);
  })
  
  //? s5 listen to request on a particular port
  // once the server is fully configured we can have it "listen" for connections on a particular "port"
  // the callback function passed as the second argument will run once when the server starts
  server.listen(8000, () => console.log('API running on port 8000'));

  //? s7 test with yarn server