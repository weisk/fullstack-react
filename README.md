# fullstack-react
A simple, full-stack JavaScript single page app featuring [React](http://facebook.github.io/react/),
[Webpack](https://webpack.github.io/), and [Falcor](http://netflix.github.io/falcor/). This is a fork of
[spring-react-demo](https://github.com/Widen/spring-react-demo) with a new backend (node) and a new API (via Falcor).

The app constructed here is simple - a list of names, maintained on the server, with the ability to display, add, and manipulate names in the list via the browser. All code is covered by unit and Selenium-based integration tests as well.

Two articles cover the creation of this app:
* [version 1.x](https://github.com/Widen/fullstack-react/tree/1.2.1): [The Future of Web Development](http://engineering.widen.com/blog/future-of-the-web-react-falcor/).
* version 2.x (master branch): [Testing The Future of Web Development](http://engineering.widen.com/blog/testing-future-web-stack/).


## Starting the app  
1. `npm start`
2. Navigate to http://localhost:9090

## Running unit and integration tests locally
1. `npm start`
2. `npm run setup-webdriver` (you only have to run this once)
3. `npm run start-webdriver`
4. `npm test`
