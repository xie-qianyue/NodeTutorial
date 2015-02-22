# Node Tutorial

##simpleExample :  
A simple example of 'Hello World'.
It also includes a example of getting a MD5 value of a request parameter.  
Dependencies :  
- express;  
- utility.  

##asyncSpider :  
An example of spider application.  
Dependencies :  
- express  
- superagent : ajax utility;  
- cheerio : JQuery utility on the server side;  
- eventproxy : a utility simplifies event handler process.

##asyncControle :  
An example of controlling the times and the delay of concurrent asynchronous requests.  
Dependency :  
- async : a utility to controle the request.  

##testMocha :  
An example of a unit test. It is suported by [**mocha**](http://mochajs.org/) and [**istanbul**](https://github.com/gotwarlost/istanbul).  
Dependency :  
- [should.js](https://github.com/tj/should.js) : an assertion utility.  

Install mocha and istanbul globally :
>$ npm install mocha -g  
>$ npm install instanbul -g
  
To run mocha for test :  
>$ mocha  
  
To run istanbul for code coverage :  
>$ istanbul cover _mocha  
  
You will find a coverage report in : YOUR_PROJECT_FOLDER/coverage/lcov-report/index.html  

##License  
This tutorial project is under MIT license.   
Thanks to [alsotang](https://github.com/alsotang/node-lessons). The project is inspired and referrenced to his tutorial project.
