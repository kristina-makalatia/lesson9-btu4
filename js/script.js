let firstName = "anna"; //string
let age = 18; //number
let status = false; //boolean
let x = null; //null
let y; //undefined

//
let item1 = 10;
let item2 = "5";
let result = item1 / item2;
console.log(result);
console.log(typeof result);

//
let item3 = "Good";
let item4 = "Morning";
console.log(item3 + " " + item4);

let a = 15;
a += 3; //a = a + 3
console.log(a);

//
console.log(5 == "5"); // true
console.log(5 === "5"); //false
console.log(true && false); //false
console.log(false && true); //false
console.log(true && undefined); //undefined
console.log(0 && true); //0
console.log(0 && undefined); //0
console.log(true || false); //true

//
let number5 = 7;

if (number5 < 5) {
  console.log("hello");
} else if (number5 < 10 && number5 > 6) {
  console.log("hello2");
} else if (number5 < 10) {
  console.log("hello3");
} else {
  console.log("error");
}

//ternary operator
let resultCondition =
  number5 < 5
    ? "hello"
    : number5 < 10 && number5 > 6
    ? "hello2"
    : number5 < 10
    ? "hello3"
    : number5 < 20
    ? "Hello4"
    : "error";

console.log(resultCondition);
