const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

app.use(
    express.urlencoded({
        extended: true
    }),
);
app.use(express.json());

const hbs = exphbs.create({
    partialsDir: ['views/partials']
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render("home");
});

app.post('/books/insertbook', (req, res) => {
    const title = req.body.title;
    const pagesqtd = req.body.pagesqtd;

    const insertQuery = `INSERT INTO books (s_title_books, s_pageqtd_books) VALUES ('${title}', ${pagesqtd})`;

    conn.query(insertQuery, function(err) {
        if (err) {
            console.log(err);
        };

        res.redirect('/');
    });
});

app.get('/books', (req, res) => {
    const readQuery = "SELECT * FROM books";

    conn.query(readQuery, function(err, data) {
        if (err) {
            console.log(err);
            return;
        };

        const data_books = data;

        res.render('books', { data_books });
    });
});

app.get('/books/:id', (req, res) => {
    const id = req.params.id;
    
    const select = `SELECT * FROM books WHERE i_id_books = ${id}`;

    conn.query(select, function(err, data) {
        if (err) {
            console.log(err);
        };

        const book = data[0];

        res.render('book', { book });
    });
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