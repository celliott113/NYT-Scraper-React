// Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Obtain the router proeprty
var Router = require('react-router').Router

// Obtain the routes
var routes = require('./config/routes');

// Include React components
var Main = require('./Components/main.js');

ReactDOM.render(
    
    <div className = 'main-container'>
    <Main />
    </div>,
    
    document.getElementByID('app')
)