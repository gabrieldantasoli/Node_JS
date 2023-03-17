// Modulos Externos
import inquirer from "inquirer";
import chalk from "chalk";

// Modulos Iternos
import fs from "fs"

operation();

function operation() {
    inquirer.prompt([
        {
            type: 'list',
            name: "action",
            message: "O que deseja fazer ? ",
            choices: [
                "Criar Conta",
                "Consultar Saldo",
                "Depositar",
                "Sacar",
                "Sair",
            ],
        },
    ])
    .then((answer) => {
        const action = answer["action"];
        
        switch (action) {
            case "Criar Conta":
                createAccount();
                break;
            case "Consultar Saldo":
                
                break;
            case "Depositar":
                
                break;
            case "Sacar":
                
                break;
            case "Sair":
                console.log(chalk.bgBlueBright.black("Obrigado por q o accounts."));
                process.exit();
                break;
        }
    })
    .catch((err) => console.log(err.message));
}

// Create an Account :
function createAccount() {
    console.log(chalk.bgGreen.black("Parabéns por escolher o nosso banco."));
    console.log(chalk.green("Defina as opções da sua conta :"));

    buildAccount();
}

function buildAccount() {
    inquirer.prompt([
        {
            name: "accountName",
            message: "Digite um nome para a sua conta : ",
        },
    ])
    .then((answer) => {
        const accountName = answer["accountName"];

        if (!fs.existsSync("accounts")) {
            fs.mkdirSync("accounts");
        }

        if (fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.bgRed.black("Esta conta já existe. Escolha outro nome !"));

            buildAccount();
        } else {
            fs.writeFileSync(`accounts/${accountName}.json`,
            '{"balance": 0}'),
            function (err) {
                console.log(err);
            }

            console.log(chalk.green.white("Parabéns!! Sua conta foi criada."));
            operation();
        }
    })
    .catch((err) => console.log(err.messge()))
}

// Consulatar Saldo :


