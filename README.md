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
The first example of 'Hello World' and a example of getting a MD5 value of a request parameter.  
###package.json
All npm packages contain a file, usually in the project root, called **package.json** - this file holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies. It can also contain other metadata such as a project description, the version of the project in a particular distribution, license information, even configuration data - all of which can be vital to both npm and to the end users of the package. The package.json file is normally located at the root directory of a Node.js project. [1]  
###Initialization of package.json
Use the following command to initialize package.json:  
>$ npm init 

This will ask you a bunch of questions, and then write a package.json for you.[2]  
###Dependencies :  
- [express](http://expressjs.com/);  
- [utility](https://github.com/node-modules/utility), in this example we use it to generate the md5 value.  

####Install Dependencies
Use this command to install the dependencies:  
>$ npm install --save nameOfDependency  

For example,  
>$ npm install --save express  

The --save option instructs NPM to include the package inside of the dependencies section of your package.json automatically, thus saving you an additional step.
[1]: https://docs.nodejitsu.com/articles/getting-started/npm/what-is-the-file-package-json  "What is the file `package.json`?"  
[2]: https://docs.npmjs.com/cli/init "Interactively create a package.json file"  

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
An example of a browser test. It is suported by mocha, [**chai.js**](http://chaijs.com/) and [**PhantomJS**](http://phantomjs.org/).  
Dependency :  
- mocha;
- chai.js : an assertion utility;
- PhantomJS : a headless testing utility of web applications.

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
  
We can use **PhantomJS** to make the test suitable for the command-line testing and to integrate it to the continuous integration system. In this example, I chosse a mocha PhantomJS mixed tool : [mocha-phantomjs](https://github.com/metaskills/mocha-phantomjs).  
Install it by npm :  
>$ npm g -i mocha-phantomjs;  

Modify the script in index.html :  
```
  if (window.mochaPhantomJS) {
    mochaPhantomJS.run();
  } else {
    mocha.run();
  }
```  
Run the test in command-line :  
>$ mocha-phantomjs index.html.  

##testBrowser2
An other example of the browser test on introducing [Zombie](http://zombie.labnotes.org/) and [request js](https://github.com/request/request).

##License  
This tutorial project is under MIT license.   
Thanks to [alsotang](https://github.com/alsotang/node-lessons). The project is inspired and referrenced to his tutorial project.
