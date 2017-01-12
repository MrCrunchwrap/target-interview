# Target Interview Case Study

This application was created for the Target Lead Engineer interview
It uses Webpack + Marionette + ES6/Babel

## Getting started

* Install:
    * Inside this folder run: `npm install`
* Run:
    * `npm start` — starts project
    * After starting project, open browswer and navigate to `http://localhost:8080/public/index.html`
    * `npm run build` - builds you project
* Test:
	* `npm test` - runs unit tests
* Build:
	* `webpack` - this command will build project to public folder. Simply open index.html from that folder to view project

* Continuous Delivery - NOT IMPLEMENTED
	* Would probably create a separate webpack config specifically for production
	* Create server.js express server that responds on * with the webpack built index.html
	* Use git hooks to deploy app when commits are pushed