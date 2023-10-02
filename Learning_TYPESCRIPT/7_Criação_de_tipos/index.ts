// 1 - Generics
function showData<T>(arg: T): string {
    return `O dado é: ${arg}`
}

console.log(showData(3));
console.log(showData("Gabriel"));
console.log(showData(true));
console.log(showData([1,2,3,4]));


// 2 - Constraint em generic
function showProductName<T extends {name: string}>(obj: T) {
    console.log(`O nome do produto é: ${obj.name}`);
}

const myObj = {name: "Mouse", price: 10.2};
showProductName(myObj);


14:40 min