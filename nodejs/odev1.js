import axios from "axios";

async function getData(user_id) {
    const {data: users} = await axios (
        "https://jsonplaceholder.typicode.com/users/" + user_id
    );
    const {data: posts} = await axios (
        "https://jsonplaceholder.typicode.com/posts/" + user_id
    );
    console.log("users", users)
    console.log("posts", posts)
};

export default getData;

// (async () => {
//     const { data: users } = await axios("https://jsonplaceholder.typicode.com/users")

//     const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1")

//     console.log("users", users);
//     console.log("post1", post1)
// })();