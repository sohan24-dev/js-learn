// let a = 10;
// const b = 20;
// var c = 30;

// {} this is scope 

// console.log(a);
// console.log(b);
// console.log(c);



// Nested scope ..............

function one (){
    const username = "sohan"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()
    
}
// one()



