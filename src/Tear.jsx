import React, { useState } from "react";

const Tear=({tear,checkTear})=>{
    const TearClick=()=>{
        checkTear(tear.id);
    };

    return (
    <div>
        <label>
            <input 
             type="checkbox" 
             checked={tear.deleteds}
             readOnly
             onChange={TearClick} 
             />
        </label>
        {tear.name}
        
    </div>
    );
};

export default Tear;