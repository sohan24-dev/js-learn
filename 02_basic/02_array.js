const marvel_heros = ["sohan", "sami", "sadia", "sabina"]

const dc_heros = ["shajahan", "rizbe", "ahamed"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

// const allheros = marvel_heros.concat(dc_heros) 
// console.log(allheros);

const all_newHeros= [... marvel_heros,...dc_heros]
// console.log(all_newHeros)


const another_Array = [1, 2, 3,[4, 5, 6],[7, 8,[9, 0]]]

const real_another_array = another_Array.flat(Infinity)

// console.log(real_another_array);


console.log(Array.isArray("sohan"));
console.log(Array.from("sohan"));

