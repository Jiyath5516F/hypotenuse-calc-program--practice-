let a;
let b;
let c;

//Getting values
a = window.prompt("Enter side A"); //get value for side A
a = Number(a);

b = window.prompt("Enter side B"); //get value for side B
b = Number(b);

//Formula

// c = Math.pow(a, 2) + Math.pow(b, 2);
// c = Math.sqrt(c); 

        // OR

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log("Side C is:", c);

