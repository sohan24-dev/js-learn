// Dates 

// let mydate = new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());


// let mybirthDate = new Date (2005, 11, 24);
let mybirthDate = new Date ("2005-12-24");
// console.log(mybirthDate.toDateString());


let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(mybirthDate.getTime());
// console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
newDate.toLocaleString('default',{
    weekday:"long",
    // timeZone:""
})

