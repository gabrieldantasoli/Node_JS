const express = require("express");
const exphbs = require("express-handlebars").create({ /* configurações */ });

const app = express();

app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');

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

app.listen(3000, () => {
    console.log("App rodando!");
});
