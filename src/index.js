const express= require('express')
const route = require('./routes')
const { engine } = require('express-handlebars')
const path = require('path')
const app=express()
const db = require('./config/db')
const port = 3000
var methodOverride = require('method-override') 

app.use(express.static(__dirname+ '/public'))

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

app.use(methodOverride('_method'))
//app.use(morgan('combined'));
db.connect();

app.engine('hbs', engine({
    extname:'.hbs'
}));
app.set('view engine','hbs');
app.set('views', path.join(__dirname,'resources/views'));
console.log(path.join(__dirname, 'resources/views'))
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })