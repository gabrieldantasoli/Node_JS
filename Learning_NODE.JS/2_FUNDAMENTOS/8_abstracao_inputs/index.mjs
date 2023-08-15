import inquirer from "inquirer";

inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual a primeira nota ? '
    },
    {
        name: 'p2',
        message: 'Qual a segunda nota ? '
    },
    {
        name: 'p3',
        message: 'Qual a terceira nota ? '
    },
])
.then((answers) => {
    console.log(answers);
    console.log(`A média é : ${((parseFloat(answers.p1) + parseFloat(answers.p2) + parseFloat(answers.p3)) / 3).toFixed(2)}`);
})
.catch(err => console.log(err));

