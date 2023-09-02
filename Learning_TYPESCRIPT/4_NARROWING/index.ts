// 1 - type guard
function sum(a: number | string, b: number | string) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    } else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    } else {
        console.log("Impossível realizar operação!")
    }
}

sum("1", "9");
sum(10, 90);
sum("1", 9);

// 2 - checando se o valor existe
function operations(arr: number[], operation?: string | undefined) {
    if (operation === "SA") {
        let result = 0;
        for (let item in arr) {
            result += arr[item];
        }
        console.log(result);
    } else if (operation === "MA") {
        let result = 1;
        for (let item in arr) {
            result *= arr[item];
        }
        console.log(result);
    } else {
        console.log("Por favor, defina uma operação");
    }
}

operations([1,2,3,4,5], "SA");
operations([1,2,3,4,5], "MA");
operations([1,2,3,4,5], "EXP");