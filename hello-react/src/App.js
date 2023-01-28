import './App.css';

// import Header from "./components/Header"
// Component isminin buyuk harfle baslamasina dikkat edilmelidir.

const name = "Eray";
const surname ="Aybek";
const isLoggedIn = true;

function App() {
  return ( 
    <> 
    {/* React.Fragment */}


      <h1>{name} {surname}</h1>
      <h1>
        {isLoggedIn ? `Benim adım ${name}, soyadım ${surname}` : "Giriş Yapmadınız."}
      </h1>
      
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