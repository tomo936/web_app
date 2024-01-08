import React, { useState } from "react";
import Tear from"./Tear"

const TearList = ({tears,checkTear})=>{
    return tears.map((tear)=>(
        <div className="tears">
       <Tear tear={tear} key={tear.id} checkTear={checkTear}/>
       </div>
    ));
    
};

export default TearList;