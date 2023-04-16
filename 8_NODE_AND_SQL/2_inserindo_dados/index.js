const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();
const hbs = exphbs.create({
    partialsDir: ['views/partials']
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render("home");
});

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '201000267165',
    database: 'nodemysql'
});

conn.connect(function(err) {
    if (err) {
        console.log(err);
    }

    console.log("Conected to mysql");

    app.listen(3000);
});