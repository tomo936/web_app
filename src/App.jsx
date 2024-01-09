import React, { useState ,useRef} from "react";
import TearList from "./TearList";
import Monster from "./Monster";
import Monster2 from "./Monster2";
import Monster3 from "./Monster3";
import Monster4 from "./Monster4";


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

  const devilrevel=tears.filter((tear)=>!tear.deletes).length;

  const devil = () => {
    if (devilrevel<2) {
      return <Monster/>;
    } else if(devilrevel<4) {
      return <Monster2/>;
    } else if(devilrevel<6){
      return <Monster3/>;
    }else if(devilrevel<8){
      return <Monster4/>;
    }
    
  };

  return (
    <div>
     
      
      <div className="bg">
      <input type="text" ref={tearNameRef}/>
     
      <button onClick={addTear}>涙を流す</button>
      <button onClick={Clear}>忘れる</button>
      
      <div className="tearLevel">涙レベル:{tears.filter((tear)=>!tear.deletes).length}</div>
      {devil(devilrevel)}
      <TearList tears={tears}checkTear={checkTear}/>
      
     </div>
    </div>
  );
};

export default App;