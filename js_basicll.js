function magicMultiply(x, y){
    // --- your code here ---
    if (x === 0 && y === 00){
        return "All input0";
    }

    
    if (x.constructor === Array) {
        for (let i =0; i < x.length; i ++){
            x[i] = x[i] * y
        }
        return x; 
    }

    if (y.constructor === String) {
        return "error: you cannot multiply by string";
    }


    if (x.constructor === String) {
        let newStr = [];
        for (var i = 0; i < y; i ++){
            newStr += x;
        }
        return newStr; 
    }
    return x * y; 
}

const test1 = magicMultiply(5, 2);
const test2 = magicMultiply(0, 0);
const test3 = magicMultiply([1, 2, 3], 2);
const test4 = magicMultiply(7, "three");
const test5 = magicMultiply("Brendo", 4);

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);