// 1 - arrays
var numbers = [1, 2, 3, 4];
var names = ["Gabriel", "Samuel"];
numbers.push(5);
numbers.push(6);
names.push("Alda");
console.log(numbers);
//--------------------------------------------------------------
// 2 - any
var arr1 = [1, "Teste", true, []];
arr1.push([1, 2, 3, 4, 5]);
console.log(arr1);
//--------------------------------------------------------------
// 3 - funções com parametros tipados
function soma(a, b) {
    var soma = a + b;
    console.log("A soma de ".concat(a, " e ").concat(b, " \u00E9 = "), soma.toFixed(2));
}
soma(2, 9.999);
//--------------------------------------------------------------
// 4 - retorno da função
function greeting(name) {
    return "Ol\u00E1, ".concat(name, "!");
}
console.log(greeting("Gabriel Dantas"));
//--------------------------------------------------------------
// 5 - função anonimas
setTimeout(function () {
    var salary = 1000;
    //console.log(salary);
}, 2000);
//--------------------------------------------------------------
// 6 - tipos de objetos
function passCoordinates(coord) {
    console.log("X coordinate: " + coord.x);
    console.log("Y coordinate: " + coord.y);
}
var objCoord = { x: 1900, y: 2100 };
passCoordinates(objCoord);
//--------------------------------------------------------------
// 7 - Propriedades opcionais
function showNumbers(a, b, c) {
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
        console.log("Nenhum número!!");
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
showNumbers(6);
showNumbers();
//---------------------------------------------------------------
// 8 - Validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return "Ol\u00E1, ".concat(firstName, " ").concat(lastName, ", tudo bem?");
    }
    return "Ol\u00E1, ".concat(firstName, ", tudo bem");
}
console.log(advancedGreeting("Gabriel", "Dantas"));
console.log(advancedGreeting("Samuel"));
//---------------------------------------------------------------
//9 - Union Types
function showBalance(balance) {
    console.log("O saldo da conta \u00E9 R$".concat(balance));
}
showBalance(10);
showBalance("10");
var arr2 = [1, "ddjdj", true];
//---------------------------------------------------------------
// 10 - Avancando em Union Types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return "A fun\u00E7\u00E3o do usu\u00E1rio \u00E9 ".concat(role, "!");
}
console.log(showUserRole(false));
console.log(showUserRole("Coordenador"));
function showId(id) {
    console.log("O id \u00E9 : ".concat(id, " !"));
}
showId(1);
showId("4298359284");
function showCoords(obj) {
    console.log("X: ".concat(obj.x, " Y: ").concat(obj.y, " Z: ").concat(obj.z));
}
var coordObj = {
    x: 100,
    y: 200,
    z: 300
};
showCoords(coordObj);
//---------------------------------------------------------------
// 14 - Literal Types
var test;
function showDirection(direction) {
    console.log(direction);
}
//showDirection("ha");
showDirection("L");
