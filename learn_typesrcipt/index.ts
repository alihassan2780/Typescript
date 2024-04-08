//Task 1
let greeting:string ="Hello World!";
console.log(greeting);

//Task 2
let num1 = 5;
let num2 = 2;

let add = num1 + num2;
let sub = num1 - num2;
let multiply = num1 * num2;
let divide = num1 / num2;

console.log("Sum is:",add);
console.log("Difference is:",sub);
console.log("Product is:",multiply);
console.log("Division is:",divide);

//Task 3
let a = 1;
let b = 2;
[a , b] = [b , a];
console.log("After swap",a);
console.log("After swap",b);

//Task 4
//let message: string = 4;
//console.log(message); 
//Type 'number' is not assignable to type 'string'.

//Task 5
let Num1 = 5;
let Num2 = 3;
let mod = Num1 % Num2;

console.log("Remainder is:",mod);

//Task 6
let counter = 0;
counter++;
console.log("Increment is:",counter);

let counter1 = 0;
counter1 = counter1 + 1;
console.log("Increment using method:",counter1);

//Task 7
let a1 = true;
let b1 = false;
let c1 = true;

let Andres:boolean = a1 && b1 && c1;
console.log("And gate:",Andres);

let Orres:boolean = a1 || b1 || c1;
console.log("Or gate",Orres);

let notres1:boolean = !a1;
let notres2:boolean = !b1;
let notres3:boolean = !c1;
console.log("NOT gate for a:", notres1);
console.log("NOT gate for b:", notres2);
console.log("NOT gate for c:", notres3);


//Task 8
let num = 10;
num += 10;
console.log("Results:",num);
num -= 10;
console.log("Results:",num);
num *= 10;
console.log("Results:",num);
num /= 10;
console.log("Results:",num);

//Task 9
let number = 6;
if(num % 2 == 0)
    {
      console.log("The number is even.");
    }
else
    {
        console.log("The number is odd.");
    }

//Task 10
let age = 18;
if(age >= 18)
    {
        console.log("The person is eligible");
    }
else
    {
        console.log("The person is not eleigible.");
    }

//Task 11
let score: number = 85;
let grade: string;

if (score >= 90) 
  {
    grade = "A";
  } 
else if (score >= 80)
  {
    grade = "B";
  }
else if (score >= 70) 
  {
    grade = "C";
  } 
else if (score >= 60)
  {
    grade = "D";
  } 
else
  {
    grade = "F";
  }

console.log("Score:" ,score, "Grade:",grade);

//Task 12
let x = 2, y = 8, z = 5;
if(x > y && x > z)
    {
        console.log("x is greater.");
    }
else if(y > x && y > z)
    {
        console.log("Y is greater.");
    }
else
    {
      console.log("Z is greater.");
    }


    //Task 13
    let leapyear = 2024;
    if(leapyear % 4 == 0)
        {
            console.log("This is Leap Year.");
        }
    else
        {
           console.log("This is not Leap year.");
        }

//Task 14
let fahrenheit = 50;
let celsius;
celsius = (fahrenheit - 32) / 1.8;
console.log("Fahrenheit:",fahrenheit, "Celsius:", celsius);

//Task 15
let Number1 = 15;
if( Number1 > 0)
    {
        console.log("Number is positive.");
    }
else if(Number1 < 0)
    {
        console.log("Number is negative.");
    }
else if(Number1 == 0)
    {
        console.log("Number is Zero.");
    }
else
    {
        console.log("Re-enter the number.");
    }