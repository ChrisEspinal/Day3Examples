

/* rest and spread operators

rest(...)
spread(...)


rest


 */


// the following function multiplies numbers passed in the parameter
function multiply(parameter, anotherParameter, ...args){ // rest operator can also have other parameters before , ...args
    //body
    //name2 = "Mary Doe";
    //console.log(name2);
    console.log(args);
    let product = 1;
    for(let i in args){
        product = product * args[i];
        //let test = "";
        //var test = "";
    }

    console.log(product);


    // for(let i in args){
    //     console.log(args[i]);
    // }

    // for(index = 0; index < args.length; index ++){
    //     console.log(args[index]);

    //     product = product * args[i];
    // }
}




multiply(2,4);
multiply(1,2,3,4,5);



/* Spread operator



 */

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [10, 20, 30];

console.log(sum(...numbers)); // Spread operator 

// console.log(sum(10, 20, 30));

/*

myFunction(...terableObject)

 */


let t = document.getElementById("myDog");
//console.log(t);

let t1 = document.getElementsByClassName("dogs");
//console.log(t1);
//console.log(Array.isArray(t1));

let t2 = document.getElementsByTagName("h1");
//console.log(t2);

/* We can also be able to use querySelector, querySelectorAll

Searching using CSS selectors
1. Class selector
2. id selector
3. element selector

 */

// The querySelector will return only the first element that matches the CSS selector specified
// let t3 = document.querySelector(".dogs");
let t3 = document.querySelector("#myDog");
//console.log(t3);

// querySelectorAll will return all elements that match a specified CSS selector(s)

let t4 = document.querySelectorAll(".dogs");

//The Array.from(object) returns an array objects from the given objects
let arrayT4 = Array.from(t4);
//console.log(arrayT4);

// console.log(t4);
// console.log(t4[0]); to get first element in NodeList change index depending on which you want
//console.log(Array.isArray(t4)); //to check if it's an array
//console.log(Array.isArray(arrayT4));

let arrayT4B = [...t4]; // also converts seperate t4 values into an array
//console.log(arrayT4B);

//let x = document.getElementById("myDog").firstChild;
let x = document.getElementById("mainBody").previousElementSibling;
console.log(x);


let x1 = document.getElementById("mainBody");
x1.style.backgroundColor = "yellow";

let newParagraph = document.createElement("p");
newParagraph.innerHTML = "This is our new paragraph";
//document.body.appendChild(newParagraph); outside main, vvv inside
document.getElementById("mainBody").appendChild(newParagraph); 


/* 
JS Events

syntax for addEventListener
document.addEventListener(event, function, useCapture);

event: This specifies the name of the event

function: This specifies the function that should run when the event occurs
The first and second parameters are required. You must provide the event
and the function.

useCapture: boolean value that specifies whether the event should be 
executed in the capturing and the bubbling phase


 */

 //write event without "on" in front
// document.addEventListener("click", function(){
//     alert("today");
// }); 

// for a specific element
// document.getElementById("myDog").addEventListener("click", function(){
//     alert("today");
// });

document.getElementById("myDog").addEventListener("click", test);

function test(){
    alert("today");
}

// to add event listener with param
document.getElementById("myFriend").addEventListener("click", function(){
    test1("Scruffy");
});

function test1(name1){
    alert("today" + name1);
}

////////////////


// document.getElementById("myForm").addEventListener("submit", function(){
//     alert("This form has been submitted.");
//     event.preventDefault();
// });

document.getElementById("myForm").addEventListener("submit", function(){
    //alert("This form has been submitted.");

    /*
    We want to get a value that been entered by a user in the form

     */
    // The following line gets a value from the input field
    let username = document.getElementById("username").value;
    //console.log(username.length);
    //username = username.trim(); // to get rid of extra spaces front and back
    
    if(username == "" || username.length == 0){
        //alert("Please enter a valid username");
        document.getElementById("username").style.border = "thick solid red";
        alert("Please enter a valid username");
    }
    else {
        document.getElementById("username").style.backgroundColor = "white";  
    }

    //console.log(username.length);
    //alert(username);

    let confirmPassword =  document.getElementById("confirmPassword").value;
    let password =  document.getElementById("password").value;

    password = password.trim();
    confirmPassword = confirmPassword.trim();

    if(password != confirmPassword){
        document.getElementById("password").style.border = "thick solid red";
        document.getElementById("confirmPassword").style.border = "thick solid red";
        alert("The password you entered do not match");
    }else{
        document.getElementById("password").style.border = "1px solid grey";
        document.getElementById("confirmPassword").style.border = "1px solid grey";
    }

    let formTitle = document.getElementById("title");

    formTitle.innerText = formTitle.innerText + " CMP 1000";
    console.log(formTitle.innerText);


    //adding a new div , used innerHTML to change HTML
    let newDiv = document.getElementById("newDiv");

    newDiv.innerText = newDiv.innerHTML + " CMP 1000";
    console.log(newDiv.innerText);


    event.preventDefault();
});

