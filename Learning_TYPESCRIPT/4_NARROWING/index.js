var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1 - type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossível realizar operação!");
    }
}
sum("1", "9");
sum(10, 90);
sum("1", 9);
// 2 - checando se o valor existe
function operations(arr, operation) {
    if (operation === "SA") {
        var result = 0;
        for (var item in arr) {
            result += arr[item];
        }
        console.log(result);
    }
    else if (operation === "MA") {
        var result = 1;
        for (var item in arr) {
            result *= arr[item];
        }
        console.log(result);
    }
    else {
        console.log("Por favor, defina uma operação");
    }
}
operations([1, 2, 3, 4, 5], "SA");
operations([1, 2, 3, 4, 5], "MA");
operations([1, 2, 3, 4, 5], "EXP");
// 3 - instance of
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(name) {
        return _super.call(this, name) || this;
    }
    return SuperUser;
}(User));
var jhon = new User("Jhon");
var paul = new SuperUser("Paul");
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log("Olá, chefe!");
    }
    else if (user instanceof User) {
        console.log("Olá, funcionário!");
    }
}
userGreeting(jhon);
userGreeting(paul);
// 4 - operador in
var Dog = /** @class */ (function () {
    function Dog(name, raca) {
        this.name = name;
        if (raca) {
            this.raca = raca;
        }
    }
    return Dog;
}());
var turca = new Dog("Turca", "Labrador");
var lili = new Dog("Lili");
function showDogDetails(dog) {
    if ('raca' in dog) {
        console.log("O cachorro \u00E9 da ra\u00E7a ".concat(dog.raca));
    }
    else {
        console.log("O cachorro n\u00E3o tem uma ra\u00E7a definida!");
    }
}
showDogDetails(turca);
showDogDetails(lili);
