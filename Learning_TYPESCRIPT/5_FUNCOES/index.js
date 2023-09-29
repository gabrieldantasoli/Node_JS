var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 1 - void
function withoutReturn() {
    console.log("Esta função não tem retorno!");
}
withoutReturn();
// 2 - Callback como argumento
function gretting(name) {
    return "Ol\u00E1, ".concat(name);
}
function preGretting(f, userName) {
    console.log("Preparando função!");
    var greet = f(userName);
    console.log(greet);
}
preGretting(gretting, "Gabriel");
preGretting(gretting, "Samuel");
// 3 - generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
function mergeObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var newObject = mergeObjects({ name: "Gabriel" }, { age: 19 });
console.log(newObject);
// 4 - constrains nas generic functions
function biggestNumber(a, b) {
    var biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 4));
console.log(biggestNumber("12", "13"));
// 5 - Especificar o tipo do argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays([1, 2, 3], ["4", "5c", "6"]));
