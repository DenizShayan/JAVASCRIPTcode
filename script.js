// // document.getElementById("count-el").innerText = 5;

// // let count = 0;
// // count = count + 1;
// // console.log(count);

// //initialize the count as 0
// //listen for clicks on the increment button
// //increment the coount variable when the button us cliced
// //change the count-el in the HTML to reflect the new count

// 1. Grab the save-el paragraph and store it in a variable called saveEl

let countEl = document.getElementById("count-el")

let count = 0

function increment(){
    count++
    countEl.textContent = count
}

// // 1. create a function, save(), which logs out the count when it's called

let saveEl=document.getElementById("save-el")

function save(){ 
    // 2. Create a variable that contains both the count and the dash seperator, i.e. "12 - "
    // 3. Render the variabl in the saveEL using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    let rawSaveEl = count + " - "
    saveEl.textContent += rawSaveEl 
    
}

// // // Grab the welcome-el paragraph and store it in a variable called welcomeEl

// // // Create two variables (name & greeting) that contains your name
// // // and the greeting we want to render on the page

// // // Render the welcome message using welcomeEl.innerText

// // let welcomeEl = document.getElementById(welcome-el);

// // let myName="Deniz"

// // function yourName(name){
// //     return name;
// // }

// // function greeting(name){
// //     return "Welcome dear "+ name;   
// // }

// // let greeting = document.getElementById("welcomeEL").innerText = greeting(myName);

let resetEl=document.getElementById("reset-btn")

function reset(){
    count--
    resetEl.textContent = count    
}
