const user = {
    username : "sohan",
    price : 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        
    }
    
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


function chai(){
    let username = "sohan"
    console.log(this.username);
    
}
// chai()



// arrow function ...................

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,5));


// Impecit function..........


// const addTwo = (num1, num2) =>  num1 + num2
const addTwo = (num1, num2) => ( num1 + num2)
console.log(addTwo(3,5));
