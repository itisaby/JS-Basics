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


