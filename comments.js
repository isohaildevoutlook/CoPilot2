//create web server
var http = require('http');
//create a server object:
http.createServer(function (req, res) {
    //write a response to the client
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello World, my name is John!');
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
// Path: http.js
// Compare this snippet from member.js:
// function skillsMember() {
//     var skills = ['HTML', 'CSS', 'JS'];
//     var member = {
//         name: 'John',
//         age: 20,
//         skills: skills,
//         calculateNumbers: function(var1, var2) {
//             return var1 + var2;
//         }
//     }
//     return member;
// }
// Compare this snippet from skills.js:
// function calculateNumbers(var1, var2) {
//     return var1 + var2;
// }
//create web server
var http = require('http');
//create a server object:
http.createServer(function (req, res) {
    //write a response to the client
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello World, my name is John!');
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
// Path: http.js
// Compare this snippet from member.js:
// function skillsMember() {
//     var skills = ['HTML', 'CSS', 'JS'];
//     var member = {
//         name: 'John',
//         age: 20,
//         skills: skills,
//         calculateNumbers: function(var1, var2) {
//             return var1 + var2;
//         }
//     }
//     return member;
// }
// Compare this snippet from skills.js:
// function calculateNumbers(var1, var2) {
//     return var1 + var2;
// }
//create web server
var http = require('http');
//create a server object:
http.createServer(function (req, res) {
    //write a response to the client
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello World, my name is John!');
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080