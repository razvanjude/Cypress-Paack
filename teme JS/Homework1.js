// In a module1-yourname.js file please:
// - Create a variable with your name and display it in the console
// - Create a variable with your age and display it in the console
// - Create a variable with your hobbies (minimum 3) and display 2 of it in the console
// - Create a variable that shows if you have or not a driver's license and display it in the console
// - Create two numeric variables and display their sum and their product in the console
// - Create a "Dog" object that holds the following information:
// - name, age, possible names (at least 3), if it has pedigree
// - display in the console his second name, his age and if it has a pedigree in a "User Friendly" manner (concatenation)

let myName = "Jude";
let myAge = 99;
let myHobbies = ["sportul", "muzica", "flotarile"];
let driverLicense = true;

console.log(myAge);
console.log("Numele meu este " + myName + " am " + myAge + " ani" + "  hobbiurile mele sunt: " + myHobbies[1] + " si " + myHobbies[0] + " si am licenta de conducere: " + driverLicense);

let number1 = 25;
let number2 = 10;
console.log(number1 + number2);
console.log(number1 * number2);

let mydog = {
    name: "Rex",
    varsta: 7,
    possibleNames: ["rexi", "caine rau", "Blanosu'"],
    pedigree: false
}

console.log("Pe cainele meu il cheama " + mydog.possibleNames[2] + " are " + mydog.varsta + " ani" + " si nu are pedegree " + mydog.pedigree);

let firstName = "Claudiu";
let lastName = 'POP';
//let fullname = firstName + " " + lastName;
let fullname2 = `numele corect este: ${firstName} ${lastName}`; 
//console.log(fullname2);
//console.log(firstName.length);
console.log(firstName.includes("u"))


let Myarray = [2,3,5,7,8];
console.log(Myarray[4]);
Myarray[2] = 555;
console.log(Myarray.reverse());


let currentdate = new Date();
console.log(currentdate);


let newDate = new Date("October 30, 2022 11:13:00");
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getHours());

