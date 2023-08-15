import _ from "lodash";
import chalk from "chalk";

const a = [1,2,3,4,5];
const b = [2,7,3,5,10];

const diff = _.difference(a,b);

console.log(chalk.bgGreen.bold(diff));