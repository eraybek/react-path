import './App.css';

import User from "./components/User";
// import Header from "./components/Header"
// Component isminin buyuk harfle baslamasina dikkat edilmelidir.


const friends = [
  {
    id: 1,
    name: "Ahmet",
  },
  {
    id: 2,
    name: "Tayfun",
  },
  {
    id: 3,
    name: "Gökhan",
  }
]

function App() {
  return ( 
    <> 
    {/* React.Fragment */}
      
      <User 
      name= "Eray" 
      surname="Aybek" 
      isLoggedIn={true} 
      age={23} 
      friends={friends}
      address={{
        title: 'Ataşehir/Istanbul',
        zip:34475
      }}
      />
      
      {/* <Header /> */}

      {/* <p className='xyz'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat magnam optio non ipsa sunt atque commodi asperiores dolore laudantium amet ducimus quibusdam architecto ut, minima porro velit eum nesciunt rerum.
      </p> */}
{/* 
      <label htmlfor="myinput">
        Name
      <input id="myinput" />
      </label> */}

    </>
  )
}

export default App;