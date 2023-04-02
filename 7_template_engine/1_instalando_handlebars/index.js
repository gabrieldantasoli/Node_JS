const express = require("express");
// const exphbs = require("express-handlebars").create({ /* configurações */ });
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/dashboard', (req, res) => {

    const itens = ["Item a","Item b","Item c"];
    res.render('dashboard', { itens });
})

app.get('/', (req, res) => {

    const user = {
        name: "Gabriel",
        surName: "Dantas",
        age: 19,
        cpf: "XXX.731.39X-YY"    
    }

    const auth = false

    res.render("home", { user: user, nacionalidade: "Brasileiro", auth: auth })
});

app.get('/blog', (rq, res) => {
    const posts = [
        {
            title: "Aprender Node.js",
            category: "Javascript",
            body: "Test",
            comments: 4
        },
        {
            title: "Aprender js",
            category: "Javascript",
            body: "Test",
            comments: 4
        },
        {
            title: "Aprender Gabriel",
            category: "Javascript",
            body: "Test",
            comments: 4
        },
    ]

    res.render('blog', { posts })
})

app.listen(3000, () => {
    console.log("App rodando!");
});


