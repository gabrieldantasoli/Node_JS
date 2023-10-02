// 1 - Tipo do objeto para função com interface
interface Product {
    name: string
    price: number
    isAvailable: boolean
};

function showProductDetails(product: Product) {
    console.log(`Nome: ${product.name}; Price: ${product.price}; Is Available: ${product.isAvailable == true ? "Yes" : "Not"}`);
};

const mouse:Product = {
    name: "Mouse",
    price: 19.99,
    isAvailable: true
};

this.showProductDetails(mouse);


// 2 - propriedade opcional em interface
interface User {
    email: string
    role?: string
};

function showUserDetails(user: User) {
    console.log(`O usuário tem o e-mail: ${user.email} .`);

    if (user.role) {
        console.log(`A função do usuário é: ${user.role} .`);
    }
};

const gabriel:User = {
    email: "Dantasg",
    role: "leirbag246"
};
const samuel:User = {
    email: "SamuelD"
}

showUserDetails(gabriel);
showUserDetails(samuel);


// 3 - Readonly
interface Car {
    brand: string,
    readonly wheels: number
}

const fusca:Car = {
    brand: "GM",
    wheels: 4 // nn dá p modificar
}

console.log(fusca);


// 4 - intersection types
interface Character {
    name: string
}

interface Gun {
    type: string,
    caliber: number
}

type HumanWithGun = Character & Gun;

const arnold : HumanWithGun = {
    name: "Arnald",
    type: "Shotgun",
    caliber: 12
}

console.log(arnold)

// 5 - ReadOnly Array


let myArray: ReadonlyArray<string> = ["um", "dois", "tres", "quatro"];

// myArray[2] = "wqqw"

console.log(myArray);


// 6 - Tuplas 
type fiveNumbers = [number, number, number];

let m5n: fiveNumbers = [1,2,3];


