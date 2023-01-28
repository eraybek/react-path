// const users = ["Mehmet", "Ahmet", "Ayse"];
const users = [{
        name: "Mehmet",
        age: 31
    },
    {
        name: "Mehmet",
        age: 29
    },
    {
        name: "Ayse",
        age: 40
    }
];

/*
    push
    map
    find
    filter
    some
    every
    includes
*/

// push
// users.push("Ayse");
// users.push("Fatma");

// console.log(users);


// map
// users.map((item) => {
//     console.log(item.name);
// });


// find
// const result = users.find((item) => item.name === "Mehmet" && item.age > 20);
// console.log(result); // ilk buldugu elemani dondurur.


// filter
// const filtered = users.filter(({name, age}) => name === "Mehmet" && age < 30)  // *** {name, age} ***
// console.log(filtered)


// some
// const some = users.some(item => item.age === 29);
// console.log(some) // true


// every
// const every = users.every(item => item.age > 30);
// console.log(every); // false


// includes
const meyveler = ["elma", "armut", "muz"];

const isIncluded = meyveler.includes("muz");
console.log(isIncluded); // true