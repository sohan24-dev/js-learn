const myNums = [1, 2, 3, 4, 5, 6]

// const newnums = myNums.filter( (num) => num > 3)

// console.log(newnums);


// const newnums = myNums.filter( (num) => {
//     return num > 3})

// console.log(newnums);


const newnums = []
myNums.forEach( (num) => {
    if(num>3){
        newnums.push(num)
    }

})
console.log(newnums);



