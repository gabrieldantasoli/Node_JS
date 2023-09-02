// 1 - type guard
function sum(a: number | string, b: number | string) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    } else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    } else {
        console.log("Impossível realizar operação!")
    }
}

sum("1", "9");
sum(10, 90);
sum("1", 9);

// 2 - checando se o valor existe
function operations(arr: number[], operation?: string | undefined) {
    if (operation === "SA") {
        let result = 0;
        for (let item in arr) {
            result += arr[item];
        }
        console.log(result);
    } else if (operation === "MA") {
        let result = 1;
        for (let item in arr) {
            result *= arr[item];
        }
        console.log(result);
    } else {
        console.log("Por favor, defina uma operação");
    }
}

operations([1,2,3,4,5], "SA");
operations([1,2,3,4,5], "MA");
operations([1,2,3,4,5], "EXP");

// 3 - instance of
class User {
    name

    constructor(name: string) {
        this.name = name;
    }
}

class SuperUser extends User {
    constructor(name: string) {
        super(name)
    }
}

const jhon = new User("Jhon");
const paul = new SuperUser("Paul");

function userGreeting(user: object) {
    if (user instanceof SuperUser) {
        console.log("Olá, chefe!");
    } else if (user instanceof User) {
        console.log("Olá, funcionário!");
    }
}

userGreeting(jhon);
userGreeting(paul);

// 4 - operador in
class Dog {
    name
    raca

    constructor(name: string, raca?: string) {
        this.name = name;
        if (raca) {
            this.raca = raca;
        }
    }
}

const turca = new Dog("Turca","Labrador");
const lili = new Dog("Lili");

function showDogDetails(dog: Dog) {
    if ('raca' in dog) {
        console.log(`O cachorro é da raça ${dog.raca}`);
    } else {
        console.log(`O cachorro não tem uma raça definida!`);
    }
}

showDogDetails(turca);
showDogDetails(lili);