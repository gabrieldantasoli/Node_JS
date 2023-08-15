const path = require('path');

const customPath = "/relatorios/gabriel/relatorio1.pdf";

console.log(path.dirname(customPath)); // nome diretorio
console.log(path.basename(customPath)); // nome do arquivo
console.log(path.extname(customPath)); //extensão do arquivo