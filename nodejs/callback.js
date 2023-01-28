
// setTimeout(() => {
//     console.log("Merhaba")
// }, 5000)

// setInterval ( () => {
//     console.log("Ben her saniye çalışacağım.")
// }, 1000);

// const sayHi = (cb) => {
//     cb();
// }

// sayHi( ()=> {
//     console.log("Hello")
// });

import fetch from "node-fetch";
import axios from "axios";

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())
//     .then((users) => {
//         console.log("Users Yuklendi!", users);

//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then(data => data.json())
//         .then(post => {
//             console.log("Post 1 Yuklendi!", post);

//             fetch("https://jsonplaceholder.typicode.com/posts/2")
//             .then(data => data.json())
//             .then(post => console.log("Post 2 Yuklendi!", post));
//     });
// });


// Async Function

// async function getData(){
//     const users = await (
//         await fetch("https://jsonplaceholder.typicode.com/users")
//         ).json();

//     const post1 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         ).json();

//     const post2 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/2")
//         ).json();

//         console.log("users", users)
//         console.log("post1", post1)
//         console.log("post2", post2)

// }

// getData();


// Anonim Async Function

// (async () => {
//     const users = await (
//         await fetch("https://jsonplaceholder.typicode.com/users")
//         ).json();

//     const post1 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         ).json();

//     const post2 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/2")
//         ).json();

//         console.log("users", users)
//         console.log("post1", post1)
//         console.log("post2", post2)
// })();

// Fetch yerine Axios Kullanimi

// (async () => {
//     const { data: users } = await axios("https://jsonplaceholder.typicode.com/users")

//     const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1")
      
//     const { data: post2}= await axios("https://jsonplaceholder.typicode.com/posts/2")

//     console.log("users", users);
//     console.log("post1", post1)
//     console.log("post2", post2)
// })();

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/users")
        resolve(data)
        // reject("Bir Sorun Oluştu.")
    });
};

const getPost = (post_id) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id)
        resolve(data)
        // reject("Bir Sorun Daha Oluştu.")
    });
};

// Asenkron sırayla

// getUsers()
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e));

// getPost(1)
// .then((data) => console.log(data))
// .catch((e) => console.log(e));


// Senkron sırayla

// ( async () => {
//     await getUsers()
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e));

//     await getPost(1)
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e));
// })();

// ( async () => {

//     try {
//         const users = await getUsers();
//         const post = await getPost(1);
    
//         console.log(users);
//         console.log(post);

//     }catch (e) {
//         console.log(e)
//     }
    
// })();

Promise.all([getUsers(), getPost(1)])
.then(console.log)
.catch(console.log);