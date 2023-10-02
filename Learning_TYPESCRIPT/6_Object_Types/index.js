;
function showProductDetails(product) {
    console.log("Nome: ".concat(product.name, "; Price: ").concat(product.price, "; Is Available: ").concat(product.isAvailable == true ? "Yes" : "Not"));
}
;
var mouse = {
    name: "Mouse",
    price: 19.99,
    isAvailable: true
};
this.showProductDetails(mouse);
;
function showUserDetails(user) {
    console.log("O usu\u00E1rio tem o e-mail: ".concat(user.email, " ."));
    if (user.role) {
        console.log("A fun\u00E7\u00E3o do usu\u00E1rio \u00E9: ".concat(user.role, " ."));
    }
}
;
var gabriel = {
    email: "Dantasg",
    role: "leirbag246"
};
var samuel = {
    email: "SamuelD"
};
showUserDetails(gabriel);
showUserDetails(samuel);
var fusca = {
    brand: "GM",
    wheels: 4 // nn dá p modificar
};
console.log(fusca);
var arnold = {
    name: "Arnald",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
// 5 - ReadOnly Array
var myArray = ["um", "dois", "tres", "quatro"];
// myArray[2] = "wqqw"
console.log(myArray);
