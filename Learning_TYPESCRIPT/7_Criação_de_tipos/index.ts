// 1 - Generics
function showData<T>(arg: T): string {
    return `O dado é: ${arg}`
}

console.log(showData(3));
console.log(showData("Gabriel"));
console.log(showData(true));
console.log(showData([1,2,3,4]));


// 2 - Constraint em generic
function showProductName<T extends {name: string}>(obj: T) {
    console.log(`O nome do produto é: ${obj.name}`);
}

const myObj = {name: "Mouse", price: 10.2};
showProductName(myObj);


// 3 - generics com interface
interface MyObj<T, U, Q> {
    name: string,
    wheels: T
    engine: U
    color: Q
}

type Car = MyObj<number, number, string>;
type Pen = MyObj<boolean, boolean, string>;

const myCar: Car = {name: "Fusca", wheels: 4, engine: 1.0, color: "White"};
const myPen: Pen = {name: "Fusca", wheels: false, engine: false, color: "White"};

console.log(myCar);
console.log(myPen);

// 4 - Type parameters
