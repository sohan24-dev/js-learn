// const tinderUser = new Object() //..> singleton objects
const tinderUser = {} // Non singleton objects

 tinderUser.id ="1234soa"
 tinderUser.name ="sohan"
 tinderUser.tinderUser =false

// console.log(tinderUser);


const regularUser = {
    email : "sohan@gmail.com",
    fullname :{
        userfullname:{
            firstname:"sami",
            lastname:"ahamed"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}

// const obj3 ={obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "sohan@gmail.com"
    },
    {
        id: 1,
        email: "sohan@gmail.com"
    },
    {
        id: 1,
        email: "sohan@gmail.com"
    },
    {
        id: 1,
        email: "sohan@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));



