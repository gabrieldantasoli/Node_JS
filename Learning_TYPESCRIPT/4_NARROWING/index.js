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
