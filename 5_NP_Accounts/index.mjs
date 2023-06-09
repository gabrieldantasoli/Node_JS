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
                getAccountAmount();
                break;
            case "Depositar":
                depositar();
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

// Consultar Saldo :



// Add amount to user account : 
function depositar() {
    inquirer.prompt([
        {
            name: "accountName",
            message: "Qual o nome da conta para fazer o deposito ? ",
        }
    ])
    .then((answer) => {
        const accountName = answer["accountName"];

        if (fs.existsSync(`accounts/${accountName}.json`)) {
            inquirer.prompt([
                {
                    name: "amount",
                    message: "Quanto você quer depositar ? ",
                }
            ])
            .then((answer) => {
                let amount = Number.parseInt(answer["amount"]);


                if (!Number.isInteger(amount)) {
                    console.log(chalk.bgYellowBright("Somente valores inteiros podem ser depositados!"));
                    return operation();
                }

                updateAmount(accountName,amount);

                operation();
            })
            .catch((err) => console.log(err));
        } else {
            console.log(chalk.bgRed.white("Esta conta não existe em nossos bancos de de dados!"));
            operation();
        }
    }) 
    .catch((err) => console.log(err));
}

function updateAmount(accountName,amount=0) {
    const account = getAccount(accountName);

    if (amount < 0 && Math.abs(amount) > account.balance) {
        console.log(chalk.bgRed.black("Você não tem dinheiro suficiente!"));
        return operation();
    }

    account.balance = parseInt(account.balance) + amount;
    fs.writeFileSync(`accounts/${accountName}.json`,
    JSON.stringify(account),
    function (err) {
        console.log(err);
    })

    if (amount > 0) {
        console.log(chalk.bgGreen.black(`Você depositou R$${Math.abs(amount)} na conta de ${accountName} !`));
    } else {
        console.log(chalk.bgGreen.black(`Você sacou R$${Math.abs(amount)} da sua conta!`));
    }
}

function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`,{
        encoding: "utf8",
        flag: "r",
    })

    return JSON.parse(accountJSON);
}

function getAccountAmount() {
    inquirer.prompt([
        {
            name: "accountName",
            message: "Qual o nome da conta para ver o saudo ? ",
        }
    ])
    .then((answer) => {
        const accountName = answer["accountName"];

        if (fs.existsSync(`accounts/${accountName}.json`)) {
            inquirer.prompt([
                {
                    name: "amount",
                    message: "Quanto você quer depositar ? ",
                }
            ])
            .then((answer) => {
                let amount = Number.parseInt(answer["amount"]);

                console.log(`Você tem R$${amount.balance} .`);
                
                operation();
            })
            .catch((err) => console.log(err));
        } else {
            console.log(chalk.bgRed.white("Esta conta não existe em nossos bancos de de dados!"));
            operation();
        }
    }) 
    .catch((err) => console.log(err));
}