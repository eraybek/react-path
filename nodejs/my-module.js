// function topla(a, b){
//     return a + b;
// }

// const topla = function topla(a,b) {
//     return a + b;
// }

// const topla = (a,b) => {
//     return a + b;
// }


const hello = name => {
    // console.log("hello " + name)
    console.log(`hello ${name}`)
}

const topla = (a, b) => a + b;
const cikar = (a, b) => a - b;

const text = 'Text';

const user = {
    name: "Eray",
    surname: "Aybek"
}

const users = [
    {
    name: "Eray",
    surname: "Aybek"
    }, 
    {
    name: "Mehmet",
    surname: "Seven"
    }
]

export {hello, topla, cikar, text, user, users};