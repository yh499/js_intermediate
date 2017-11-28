//part1
function starStringgg(num){
    for (var i = 0; i < num.length; i ++){
        num =  num * "*";
    }
}


//part1==correctin==========================================

function starString(num){
    let stars = "";
    for (var i = 0; i < num; i ++){
        stars += "*"; 
    }
    return stars; 
}

let stars = starString(8);
console.log(stars);

// //part2

// function drawStarrs(x){
//     for (var i = 0; i< x.length; i++){
//         x.length * "*";
//     }
// }
// let x = [4, 6, 1, 3, 5, 7, 25];
// console.log(x);

//part2===random===================================================

function drawstars(arr){
    const result = [];
    for (var i = 0; i<arr.length; i++){
        if (typeof arr[i] === "number"){
            result.push(starString(arr[i]))
        } else if (typeof arr[i] === "string") {
            let string = "";
            for (j = 0; j < arr[i].length; j ++) {
                string += arr[i][0].toLowerCase();
            }
            result.push(string);
        }
    }
    return result; 
}

const y = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"];
const z = [4, 6, 1, 3, 5, 7, 25]

console.log(drawstars(y));
console.log(drawstars(z));