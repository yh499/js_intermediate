//math1=====================================
function zero_negativity(arr){
    for (var i = 0; i< arr.length; i ++){
         if (arr[i] < 0){
            return true;
        } else{
            return false; 

        }
    }
}

var test1 = zero_negativity([-9, 2]);
console.log(test1);

//math2=====================================
function is_even(num){
        if ( num%2 === 0){
            return true; 
        } else {
            return false; 
        }
}

var test2 = is_even(41);
console.log(test2);

//math3=====================================
function how_many_even(arr){
    let sum = 0; 
    for (var i = 0; i < arr.length; i ++){
        if (is_even(arr[i])) {
            sum += 1;
        }
    }
    return sum; 
}

var test3 = how_many_even([2,4,5,10,11,29]);
console.log(test3);

//math4=====================================

function create_dummy_array(num){
    const arr = [];
    for (var i = 0; i < num.length; i ++){
        arr.push(Math.floor(Math.random() * 10));
    }
    return arr; 
}

var test4 = create_dummy_array([1,1,3,5,3]); 
console.log(test4);


//math5=====================================

function random_choice(arr){
    let x = Math.floor(Math.random() * arr.length);
    return arr[x];
}

var test4 = create_dummy_array([2,3]); 
console.log(test4);