import chalk from 'chalk';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
const nota = parseFloat(args["nota"]);
console.log(nota);

if (nota < 4) {
    console.log(chalk.red.bold("Reprovado!"));
} else if (nota < 7) {
    console.log(chalk.yellow.bold("Prova Final!"));
} else {
    console.log(chalk.green.bold.italic("Passou com êxito!"));
}