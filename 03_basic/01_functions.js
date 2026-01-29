function sayMyName() {
    console.log("s");
    console.log("o");
    console.log("h");
    console.log("a");
    console.log("n");
    
}

// sayMyName()


// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1,number2){
//    let result = number1 + number2
//    return result
    return number1 + number2
}

const result = addTwoNumbers(3,4)
// console.log("Result:", result);


function loginUserMessage(username = "sami"){
    if (username === undefined){
        console.log("Please enter a username");
        return        
    }
    return `${username} just logged in`
}
// const username = loginUserMessage("sohan")
// console.log(username);
// console.log(loginUserMessage());

