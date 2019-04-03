/*
Exercises: templating
 
Your goal with these exercises is to practice using templates with express. (There's no need to create a database or tests for these.)

For each of these, make sure that you have the following:

express
express-es6-template-engine
at least one route (e.g., "/puppies")
a controller function for GET
each controller function should render a template (feel free to use just a simple skeleton HTML file with an h1 tag)
Optionally:

add npm script for running nodemon
Topics:
books
music
movies
*/

const express = require('express');
const es6Renderer = require('express-es6-template-engine');

const app = express();
const http = require('http');

const port = 4000;

const Movies = require('./models/movies');

// express middleware handlers
app.engine('html', es6Renderer);
app.set('view engine', 'html');
app.set('views', 'views');

// controller function
app.get('/movies', (req, res) => {
    // should render a template
    console.log('you are inside /movies')
    // res.send('welcome to the movies section');
    res.render('movies') // renders the movies.html file in the views folder
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
