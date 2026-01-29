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
        // console.log("Please enter a username");
        return        
    }
    return `${username} just logged in`
}
// const username = loginUserMessage("sohan")
// console.log(username);
// console.log(loginUserMessage());




function calculateCarPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCarPrice(2, 300, 45));

const user = {
    username : "sohan",
    price: 199
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);    
}
// handleObject(user)


const myNewArray = [200, 300, 400, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
