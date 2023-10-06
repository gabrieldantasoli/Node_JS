// 1 - Generics
function showData(arg) {
    return "O dado \u00E9: ".concat(arg);
}
console.log(showData(3));
console.log(showData("Gabriel"));
console.log(showData(true));
console.log(showData([1, 2, 3, 4]));
// 2 - Constraint em generic
function showProductName(obj) {
    console.log("O nome do produto \u00E9: ".concat(obj.name));
}
var myObj = { name: "Mouse", price: 10.2 };
showProductName(myObj);
var myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "White" };
var myPen = { name: "Fusca", wheels: false, engine: false, color: "White" };
console.log(myCar);
console.log(myPen);
