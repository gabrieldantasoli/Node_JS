// 1 - void
function withoutReturn() {
    console.log("Esta função não tem retorno!")
}

withoutReturn();

// 2 - Callback como argumento
function gretting(name: string): string {
    return `Olá, ${name}`;
}

function preGretting(f: (name: string) => string, userName: string) {
    console.log("Preparando função!");

    const greet = f(userName);

    console.log(greet);
}

preGretting(gretting, "Gabriel");
preGretting(gretting, "Samuel");

// 3 - generic function
function firstElement<T>(arr: T[]): T {
    return arr[0];
}

console.log(firstElement([1,2,3]));
console.log(firstElement(["a","b","c"]));

function mergeObjects<U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}
 
const newObject = mergeObjects({name:"Gabriel"}, {age: 19});
console.log(newObject)

// 4 - constrains nas generic functions
function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest: T;

    if (+a > + b) {
        biggest = a;
    } else {
        biggest = b;
    }

    return biggest;
}

console.log(biggestNumber(5, 4));
console.log(biggestNumber("12", "13"));

// 5 - Especificar o tipo do argumento
function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.concat(arr2);
}

console.log(mergeArrays([1,2,3], [4,5,6]));
console.log(mergeArrays<number | string>([1,2,3],[ "4", "5c", "6"]));

