const express = require("express");
const exphbs = require("express-handlebars").create({ /* configurações */ });

const app = express();

app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render("home")
});

app.listen(3000, () => {
    console.log("App rodando!");
});
