import { useState } from "react";

function App() {

  const [name, setName] = useState("Eray");
  const [age, setAge] = useState(23);
  const [friends, setFriends] = useState(["Ahmet", "Murat"]);
  const [address, setAddress] = useState({ title: 'Istanbul', zip: 34400})

  return (
    <div className="App">
      <h1>Merhaba! {name} {age}</h1>
      <button onClick={() => setName("Ahmet")}>Change name</button>
      <button onClick={() => setAge(25)}>Change age</button>

      <hr/>
      <br/><br/>

      <h2>Friends</h2>
      {
        friends.map((friend, index) => <div key={index}>{friend}</div>)
      }
      <button onClick={() => setFriends([...friends, "Ayşe"])}>Add new friend</button>

      <br/>

      <h2>Address</h2>
      <div>{address.title} {address.zip}</div>
      <button onClick={() => setAddress({...address, title:'Ankara', zip:22300})}>
        Change address
      </button>

    </div>
  );
}

export default App;
