import React, { useState ,useRef} from "react";
import Header from "./Header";
import TearList from "./TearList";
import { v4 as uuidv4} from "uuid";


function App(){
  const [tears, setTears] = useState([]);
  const tearNameRef=useRef();

  const addTear = ()=>{
     const name= tearNameRef.current.value;
     setTears((prevTears)=>{
        return [...prevTears,{ id : uuidv4(),name:name,deletes:false}];
      });
      tearNameRef.current.value=null;
    };
  
  const checkTear=(id)=>{
    const newTears=[...tears];
    const tear=newTears.find((tear)=>tear.id === id);
    tear.deletes=!tear.deletes;
    setTears(newTears);
  };

  const Clear = () => {
    const newTears = tears.filter((tear) => !tear.deletes);
    setTears(newTears);
  };

  return (
    <div>
      
      
      <Header/>
      
      <input type="text" ref={tearNameRef}/>
      <button onClick={addTear}>涙</button>
      <button onClick={Clear}>消す</button>
      <div className="tearLevel">涙レベル:{tears.filter((tear)=>!tear.deletes).length}</div>
      <TearList tears={tears}checkTear={checkTear}/>
    
   
     
    
    </div>
  );
};

export default App;