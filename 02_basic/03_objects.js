// singleton 

// object literals

const JsUser = {
    name:"sohan",
    age:20,
    location:"Gaxipure",
    email:"sohan@.com",
    isLoggedIn:false
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);


JsUser.greeting = function (){
    console.log("hello js User");
    
}
JsUser.greetingTwo = function (){
    console.log(`hello js sohan ,${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

