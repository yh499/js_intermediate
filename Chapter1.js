//countDown 

function countdown(num){
    var arr = [];
    for (var x = num; x >= 0; x--) {
        arr.push(x)
    }
    return arr; 
}
 var arr = countdown(3);
 console.log(arr.length);

//printand return===============

function printandr(x) {
    console.log(x[0]);
    return x[1];
}
console.log([2,5])

//length=================

function lengthandsomething(arr) {
    return arr[0] + arr.length; 
}
a = [1,2,3,5,6,7]
b = ["A", "B", "C"]
c = ["This is", "2", 40]
console.log(lengthandsomething(a));

//valuegreaterthansecond 

function valuegreater(arr){
    var newarr = [];
    for (var i = 0; i< arr.length; i ++){
        if (arr[i] > arr[1]){
            newarr.push(arr[i]);
        }
    }
}

function thisLengththatValue(num1, num2){
    var arr = [];
    for (var i = 0; i < num1; i ++){
        if (num1 == num2){
            arr.print("Jinx!");
        } else {
            
        }

    }
}