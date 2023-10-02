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
