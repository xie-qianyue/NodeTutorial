# Node Tutorial

##set up environment
1. install [**nvm**](https://github.com/creationix/nvm)(Node Version Manager);
2. install node by nvm, following is the commande of install the version 0.10 :  
`$ nvm install 0.10`  
Now you can see all the version that you have installed by the commande :   
`$ nvm ls`  
If you have installed several versions, you can use this commande to choose the version which you want to use :  
`$ nvm use 0.10`  
3. set default version :  
`$ nvm alias default 0.10`

##simpleExample :  
A simple example of 'Hello World' and a example of getting a MD5 value of a request parameter.  
Dependencies :  
- [express](http://expressjs.com/);  
- [utility](https://github.com/node-modules/utility), in this example we use it to generate the md5 value.  

##asyncSpider :  
An example of spider application.  
Dependencies :  
- express  
- [superagent](http://visionmedia.github.io/superagent/) : an ajax utility;  
- [cheerio](https://github.com/cheeriojs/cheerio) : a JQuery utility on the server side;  
- [eventproxy](https://github.com/JacksonTian/eventproxy) : a utility simplifies event handler process.

##asyncControle :  
An example of controlling the times and the delay of concurrent asynchronous requests.  
Dependency :  
- [async](https://github.com/caolan/async) : a utility to controle the request.  

##testMocha :  
An example of a unit test. It is suported by [**mocha**](http://mochajs.org/) and [**istanbul**](https://github.com/gotwarlost/istanbul).  
Dependency :  
- mocha :  a JavaScript test framework;
- istanbul : a JavaScript codes coverage tool;
- [should.js](https://github.com/tj/should.js) : an assertion utility.  

Install mocha and istanbul globally :
>$ npm install mocha -g  
>$ npm install instanbul -g
  
To run mocha for test :  
>$ mocha  
  
To run istanbul for code coverage :  
>$ istanbul cover _mocha  
  
You will find a coverage report in : YOUR_PROJECT_FOLDER/coverage/lcov-report/index.html  

##testBrowser
An example of a browser test. It is suported by mocha and [**chai.js**](http://chaijs.com/).  
Dependency :  
- mocha;
- chai.js : an assertion utility.

Project set up :  
>$ mocha init yourProjectName  

This command will initailize a basic structure of a test project :
>.  
├── index.html  
├── mocha.css  
├── mocha.js  
└── tests.js  

index.html is the entry point of the test. In this example, we are going to test a simple square function. We put it in the `<script>` tag in the index.html :  
```
<script>
  var square = function(n) {
    return n * n;
  };
</script>
```
The test script is in the tests.js, in which we use the assertion function of chai.js.
```
var should = chai.should();
describe('simple test', function() {
  it('should equal 0 when n === 0', function() {
    window.square(0).should.equal(0);
  });
});
```
For using chai.js, we can download it from [here](http://chaijs.com/chai.js), and import it in the index.html.  

##License  
This tutorial project is under MIT license.   
Thanks to [alsotang](https://github.com/alsotang/node-lessons). The project is inspired and referrenced to his tutorial project.
