const args = process.argv.slice(2);

const nome = args[0].split("=")[1];

const idade = args[2].split("=")[1];

console.log(nome);
console.log(idade);

//node index.js nome=samuel habilidade=comer idade=19
