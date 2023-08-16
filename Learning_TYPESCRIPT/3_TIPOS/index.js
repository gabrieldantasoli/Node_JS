"use strict";
// 1 - arrays
let numbers = [1, 2, 3, 4];
const names = ["Gabriel", "Samuel"];
numbers.push(5);
numbers.push(6);
names.push("Alda");
console.log(numbers);
//--------------------------------------------------------------
// 2 - any
const arr1 = [1, "Teste", true, []];
arr1.push([1, 2, 3, 4, 5]);
console.log(arr1);
//--------------------------------------------------------------
// 3 - funções com parametros tipados
function soma(a, b) {
    let soma = a + b;
    console.log(`A soma de ${a} e ${b} é = `, soma.toFixed(2));
}
soma(2, 9.999);
//--------------------------------------------------------------
// 4 - retorno da função
function greeting(name) {
    return `Olá, ${name}!`;
}
console.log(greeting("Gabriel Dantas"));
//--------------------------------------------------------------
// 5 - função anonimas
setTimeout(() => {
    const salary = 1000;
    //console.log(salary);
}, 2000);
//--------------------------------------------------------------
// 6 - tipos de objetos
function passCoordinates(coord) {
    console.log("X coordinate: " + coord.x);
    console.log("Y coordinate: " + coord.y);
}
const objCoord = { x: 1900, y: 2100 };
passCoordinates(objCoord);
//--------------------------------------------------------------
