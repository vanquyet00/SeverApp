const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override')


const db = require('./config/db');
const route = require('./routes');



// connect to db
db.connect();



app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public', 'img')));
app.use(express.urlencoded({
  extended: true,
}));



app.use(express.json());

app.use(methodOverride('_method'));
// http logger
// app.use(morgan('combined'));

// template engine
app.engine('hbs',handlebars.engine({
   defaultLayout: 'main' ,
   extname: '.hbs',
  }));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources','views'));


// app.set('views', path.join(__dirname, 'resources','views','components'));


console.log("path: " + path.join(__dirname, 'resources','views', 'components'))

route(app);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
