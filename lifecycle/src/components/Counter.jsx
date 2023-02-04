import { useState, useEffect } from "react";

function Counter() {
    const [number, setNumber] = useState(0);
    // const [name, setName] = useState("Eray");
    
      
      useEffect(() => {
        console.log("Component mount edildi!"); // Mount edilme durumu => Componentin DOM üzerinde oluştuğu an

        setInterval(() => {
            setNumber((n) => n + 1);
        }, 1000)

        /* Unmount etme icin gerekli ama React 18 ile buna gerek kalmadi.
            clearInterval(interval);
        */
        return () => console.log("Component unmount edildi!"); // clearInterval buraya yazılabilirdi.
      }, []) // dependency array / bagimlilik arrayi
      
      // useState, useEffect gibi hook'ları kullanırken, bir condition içinde bunlara yer verilmemelidir!
      useEffect(() => {
        console.log("Number State Güncellendi!");
      }, [number]) // number degiskeni guncellendiginde etkiyi verir.
    
    //   useEffect(() => {
    //     console.log("Name State Güncellendi!");
    //   }, [name]) // number degiskeni guncellendiginde etkiyi verir.
    
      return (
        <div>
          <h1>{number}</h1>
          <button onClick={() => setNumber(number+1)}>Click</button>
          <hr/>
    
          {/* <h1>{name}</h1>
          <button onClick={() => setName("Mehmet")}>Click</button> */}
        </div>
      );
    
}

export default Counter;