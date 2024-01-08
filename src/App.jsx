import React, { useState } from "react";
import Header from "./Header";


const App = () => {
  const [Tear, setTear] = useState("");
  const [Tear2, setTear2] = useState([]);
  const newTear = { id: Tear2.length + 1, memo: Tear };
  
  const AddTear = (e) => {
    e.preventDefault();
    if (!Tear) return;
    setTear2([...Tear2, newTear]);
    setTear("");
  };

  

  return (
    <div>
    
      
    <Header/>

      <input
        type="text"
        value={Tear}
        onChange={(e) => setTear(e.target.value)}
        placeholder="辛い"
      />
      <button onClick={AddTear}>追加</button>

      <ul>
      <li>
        {App}
      </li>
     </ul>
    </div>
  );
};

export default App;
