// In a module2-yourname.js file please:

// - Create two numeric variables (a,b) and compare it; if a<b display in the console "The second number is larger than the first one.", if a>b display "The first number is larger than the second one." otherwise display "The numbers are equal."
let a= 20;
let b =20;

if (a<b){
    console.log ('The second number is larger than the first one.');
} else if (a>b) {
    console.log ('The first number is larger than the second one.');
} else {
     console.log('The numbers are equal.');
}

// - You have the following array cars = ["Dacia", "Mercedes", "Audi", "Lancia"];
// display in the console each car like this "Car number 1 is Dacia" (new line) 
//"Car number 2 is Mercedes" (new line) "Car number 3 is Audi"...

let cars = ["Dacia", "Mercedes", "Audi", "Lancia"];

for (let i = 0; i < cars.length; i++) {
    console.log(`Car number ${i+1} is ${cars[i]}`);
}

// - Create a function that gets 2 parameters (numeric) and returns their sum and product.

let x = 5;
let y = 10;

function sum(x, y) {
    return x + y;
}

function product(x, y) {
    return x * y;
}

console.log(sum(x, y));
console.log(product(x, y));

// - Create a function that gets 1 parameter (an array of numbers)
// and returns a reverse array (for [1,2,3] it returns [3,2,1])

let myarray = ["1", "3", "5", "8"];

function reverse(x) {    
    x.reverse();
    for (let i = 0; i < x.length; i++) {
        console.log(x[i]);
    }
}

reverse(myarray);




// function reverse(myarray) {
//     let myarray = ["1", "3", "5", "8"];
//     myarray.sort();
//     for (let i = 0; i < myarray.length; i++) {
//         console.log(myarray[i].reverse());
//     }
// }

// reverse(myarray);