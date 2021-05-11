import { nodeTestLib } from '@cicd/node-test-lib'
// const foo =  require('../../../libs/lib-node-test-js')

console.log('Hello World!', nodeTestLib);

var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!', nodeTestLib); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
