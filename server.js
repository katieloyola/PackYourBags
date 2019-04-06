//boilerplate for node server
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

var app = express();
//when the server is hit, give this page, every time (Static), and give them everything in the public file
app.use(express.static(__dirname + '/public'));

//middleware (bodyParser in express) so we can use the 'long string' attaches the information to 'req' for example
app.use(express.urlencoded({
    extended: false
}))

app.use(methodOverride('_method'));
//telling it to use handlebars, and my default layout is 'main' - defining it
app.engine('handlebars',exphbs({
    defaultLayout:'main'
}));
//putting it into action- making it so the view is handlebars
app.set('view engine', 'handlebars');

//reference routes.js
//makes routes available (public facing)
var routes = require('./controllers/routes.js');
app.use('/',routes);

var port = process.env.PORT || 3002;
app.listen(port);