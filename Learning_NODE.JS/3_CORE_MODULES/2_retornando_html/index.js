const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Contenty-Type', 'text/html');
    res.end('<h1>Hello , this is my first server with HTML!</h1><p>Testing Update.</p>')
});

server.listen(port, () => {
    console.log("Servidor");
})

