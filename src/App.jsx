import React, { useState ,useRef,useEffect} from "react";
import TearList from "./TearList";
import Monster from "./Monster";
import Monster2 from "./Monster2";
import Monster3 from "./Monster3";
import Monster4 from "./Monster4";




var x=0;

function App(){
  
  const [tears, setTears] = useState([]);
  const tearNameRef=useRef();
  while (localStorage.getItem(x)) {
    console.log(localStorage.getItem(x));
    x+=1;
  }
  useEffect(()=>{
    
    const data=window.localStorage.getItem(x);
    if(data!=null)setTears(JSON.parse(data))
  }, [])
  

  
  
  const addTear = ()=>{
    
     const name= tearNameRef.current.value;
     localStorage.setItem(x,name);
     setTears((prevTears)=>{
        return [...prevTears,{ id : x,name:name,deletes:false}];
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
    if (x<6) {
      return <Monster/>;
    } else if(x<16) {
      return <Monster2/>;
    } else if(x<21){
      return <Monster3/>;
    }else if(x<26){
      return <Monster4/>;
    }
    
  };

  return (
    <div>
     
      
     <div className="bg">
      <input type="text" ref={tearNameRef}/>
     
      <button onClick={addTear}>涙を流す</button>
      <button onClick={Clear}>忘れる(消す)</button>
      <div className="tearLevel">心レベル:{x}</div>
      {devil(devilrevel)}
      <TearList tears={tears} checkTear={checkTear}/>
      <div className="past">過去</div>
      <div className="Btear">{localStorage.getItem(0)}</div>
      <div className="Btear">{localStorage.getItem(1)}</div>
      <div className="Btear">{localStorage.getItem(2)}</div>
      <div className="Btear">{localStorage.getItem(3)}</div>
      <div className="Btear">{localStorage.getItem(4)}</div>
      <div className="Btear">{localStorage.getItem(5)}</div>
      <div className="Btear">{localStorage.getItem(6)}</div>
      <div className="Btear">{localStorage.getItem(7)}</div>
      <div className="Btear">{localStorage.getItem(8)}</div>
      <div className="Btear">{localStorage.getItem(9)}</div>
      <div className="Btear">{localStorage.getItem(10)}</div>
      <div className="Btear">{localStorage.getItem(11)}</div>
      <div className="Btear">{localStorage.getItem(12)}</div>
      <div className="Btear">{localStorage.getItem(13)}</div>
      <div className="Btear">{localStorage.getItem(14)}</div>
      <div className="Btear">{localStorage.getItem(15)}</div>
      <div className="Btear">{localStorage.getItem(16)}</div>
      <div className="Btear">{localStorage.getItem(17)}</div>
      <div className="Btear">{localStorage.getItem(18)}</div>
      <div className="Btear">{localStorage.getItem(19)}</div>
     </div>
    </div>
  );
};

export default App;