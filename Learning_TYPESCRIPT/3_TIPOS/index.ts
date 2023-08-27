// 1 - arrays
let numbers: number[] = [1,2,3,4];
const names: string[] = ["Gabriel", "Samuel"]

numbers.push(5);
numbers.push(6);

names.push("Alda");

console.log(numbers);
//--------------------------------------------------------------

// 2 - any
const arr1: any = [1, "Teste", true, []]

arr1.push([1,2,3,4,5]);

console.log(arr1);
//--------------------------------------------------------------

// 3 - funções com parametros tipados
function soma(a: number, b: number) {
    let soma: number = a + b;
    console.log(`A soma de ${a} e ${b} é = `, soma.toFixed(2));
}

soma(2, 9.999);
//--------------------------------------------------------------

// 4 - retorno da função
function greeting(name: string) {
    return `Olá, ${name}!`
}

console.log(greeting("Gabriel Dantas"));
//--------------------------------------------------------------

// 5 - função anonimas
setTimeout(() => {
    const salary: number = 1000;

    //console.log(salary);
}, 2000);
//--------------------------------------------------------------

// 6 - tipos de objetos
function passCoordinates(coord: {x: number, y: number}) {
    console.log("X coordinate: " + coord.x);
    console.log("Y coordinate: " + coord.y);
}

const objCoord = {x: 1900, y: 2100}; 

passCoordinates(objCoord);
//--------------------------------------------------------------

// 7 - Propriedades opcionais
function showNumbers(a?: number, b?: number, c?: number) {
    if (a) {
        console.log("A: " + a);
    }
    if (b) {
         console.log("B: " + b);
    }
    if (c) {
        console.log("C: " + c);
    }

    if (!(a || b || c)) {
        console.log("Nenhum número!!")
    }
}

showNumbers(1,2,3);
showNumbers(4,5);
showNumbers(6);

showNumbers();

//---------------------------------------------------------------

// 8 - Validando argumento opcional
function advancedGreeting(firstName: string, lastName?: string ){
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }

    return `Olá, ${firstName}, tudo bem`;
}

console.log(advancedGreeting("Gabriel", "Dantas"));
console.log(advancedGreeting("Samuel"));
//---------------------------------------------------------------

//9 - Union Types
function showBalance(balance: string | number) {
    console.log(`O saldo da conta é R$${balance}`)
}

showBalance(10);
showBalance("10");

const arr2: Array<number | string | boolean> = [1, "ddjdj", true];
//---------------------------------------------------------------

// 10 - Avancando em Union Types

function showUserRole(role: boolean | string) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }

    return `A função do usuário é ${role}!`;
}

console.log(showUserRole(false));
console.log(showUserRole("Coordenador"));
// --------------------------------------------------------------

// 12 - Type Alias
type ID = string | number;

function showId(id: ID) {
    console.log(`O id é : ${id} !`);
}

showId(1);
showId("4298359284");
//---------------------------------------------------------------

// 13 - Interfaces
interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}

const coordObj: Point = {
    x: 100,
    y: 200,
    z: 300
}

showCoords(coordObj);
//---------------------------------------------------------------

// 14 - Literal Types
let test: "Testando";

function showDirection(direction:"L" | "R" | "B" | "T") {
    console.log(direction);
}

//showDirection("ha");
showDirection("L");
//---------------------------------------------------------------
