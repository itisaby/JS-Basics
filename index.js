 console.log("hello world");
//  first.innerHTML = "<h2>Hello bro</h2>";

// javascript variables
 var num1 = 34;
 var num2 = 56;
 console.log(num1 + num2);

// Datatypes in javascript

// Numbers
 var num3 = 123;

//Strings
 var str1 = "This is a String";
 var str2 = "This is also a String";

// Objects
 var marks = {
    arnab: 223,
     maity: 123,
    harish: 99.92
 }

//Booleans
 var a = true;
 var b = false;


 console.log(num3);
 console.log(str1);
 console.log(str2);
 console.log(str1 +" "+ str2);

 console.log(marks);

 console.log(a);
 console.log(b);

 var u = undefined;
 var u1;  // By default value is undefined.
 console.log(u);
 console.log(u1);

 var n = null;
 console.log(n);

// At a high level, there are two types of data types in javascript
// -> primitive Datatypes: undefined, null, number, string, boolean, symbol
// -> Reference Datatypes: Arrays and Objects

 var arr = [1, 2, 3, 4, 5];
 console.log(arr);
 var arr1 = [1, 2, "bablu", 3, 4];
 console.log(arr1)
 console.log(arr1[2])



// Operators in JavaScript

//Arithmetic Operators
 var a = 100;
 var b = 10;

 console.log("The value of a + b", a+b);
 console.log("The value of a - b", a-b);
 console.log("The value of a * b", a*b);
 console.log("The value of a / b", a/b);

//Assignment Operators
 var c = b;
 c+=2;
 c-=2;
 console.log(c);

//Comparison Operator 
 var x = 34;
 var y = 56;
 console.log(x==y)
 console.log(x>=y)
 console.log(x<=y)
 console.log(x>y)
 console.log(x<y)

// Logical Operators
 console.log(true && false);
// console.log(true || false);

 console.log(!true)
 console.log(!false)

function avg(a1, b1) {
    return (a1+b1)/2;
}

c1 = avg(4, 6);
c2 = avg(12, 14);
console.log(c1, c2);


//Conditionals in JS

var age = 36;
if(age>6){
    console.log("You are not a kid");
}
else{
    console.log("You are a kid");
}

console.log("only if statement");
if(age>18){
    console.log("You are eligible to vote");
}

console.log("Start of if else ladder")
if(age<2){
    console.log("You are a baby")
}
else if(age>56){
    console.log("You are getting old");
}
else{
    console.log("You are young enough")
}

console.log("End of if else ladder")


// Loops in JS

var array = [1,2,3,4,5,6];
for(var i=0; i<array.length; i++){
    console.log(array[i]);
}

//For each loop
array.forEach(function(element){
    console.log(element)
})
 
// while loop
let j = 0;
while(j < array.length){
    console.log(array[j]);
    j++;
}

// Do While loop
let k=0;
do{
    console.log(array[k]);
    k++;
}while(k < array.length);



// Array methods in JS

let myarray = ["Faang", "Camera", 34, null, true];

//Finding length of array
console.log(myarray.length); 

// Removing the last element in the array
myarray.pop();
console.log(myarray);

// adding an element to the array
myarray.push("arnab");
console.log(myarray);

// Removing an element to the array in the head
myarray.shift();
console.log(myarray);

// adding an element to the array in the head
myarray.unshift("Math");
console.log(myarray);


const newlen = myarray.unshift("Python");
console.log(newlen);

//converting array to string 
console.log(myarray.toString());

let myarray2 = [2, 13, 45, 5, 44,52];
//Sorting an array 
myarray2.sort();
console.log(myarray2.sort());


// String Methods in JS 
let  mystring = "I am a good boy good"

//Printing the length of the string
console.log(mystring.length);

//Getting the first index of the word passed by
console.log(mystring.indexOf("good"));

//Getting the last index of the word passed by
console.log(mystring.lastIndexOf("good"));

//String Slicing
console.log(mystring.slice(3, 8));

// Replacing a word in a string 
let d1 = mystring.replace("boy", "girl");
console.log(d1);
console.log(mystring)

d1 = d1.replace("good", "bad");
console.log(d1);



// Dates in JS 

// Creating a new Date
let myDate = new Date();
console.log(myDate);

// getting the full time in seconds
console.log(myDate.getTime());

// fetching the year 
console.log(myDate.getFullYear());

//fetching the day
console.log(myDate.getDay());

// fetching the minutes
console.log(myDate.getMinutes());

// fetching the hours
console.log(myDate.getHours());


// DOM Manipulation

let el = document.getElementById('click')
console.log(el);
let cl = document.getElementsByClassName('container')
console.log(cl);

//Modifying style of a class
// cl[0].style.backgroundColor = "yellow";

//Adding class to a class 
cl[0].classList.add("bg-primary");
cl[0].classList.add("text-success");

console.log(cl[0].innerHTML);
console.log(cl[0].innerText);

tn = document.getElementsByTagName('div');
console.log(tn);
create = document.createElement('p');
create.innerText = "Created a para";
tn[0].appendChild(create);

create2 = document.createElement('b');
create2.innerText = "Created a bold para";
tn[0].replaceChild(create2, create);

