let a  = "kiran";
console.log(typeof(a));
let b=23;
console.log(typeof(b));
let c=true;
console.log(typeof(c));
// string + number is added in javascript
let v= 23;
let s="Hello world";
let num = v+12;
let num1=num+s;
console.log(num1);
const n1 = 52;
const n2 = 25;
console.log(n1===n2); // equal operator 

let myVar ="Hello world";
console.log("hello mam");
console.log(typeof true);
console.log(myVar.length);
console.log(myVar.charAt(0));
console.log(myVar.indexOf("or"));
console.log(myVar.slice(5,10));
console.log(myVar.toUpperCase());
console.log(myVar.toLowerCase());
console.log(myVar.includes("Hello"));

let marks = 74;
if(marks>=95){
	console.log("Gread A+");
	console.log("Outstanding");
}
else if(marks >= 85){
	console.log("Gread A");
	console.log(" Very good");
}
else if(marks >=75){
	console.log("Gread B");
	console.log("Average");
}
else if(marks >= 65){
	console.log("Gread C");
	console.log("Below Average");
}else{
	console.log("Gread F");
	console.log("Fail");
}