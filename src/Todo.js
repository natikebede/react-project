import React, { useState } from "react";
import Modal from "./modal.js"
function Todo()

{
    const [value, setValue] = useState("");
    //const [modalopen,setmodal]=useState("false");
    function Shoot()
    {
        
        const cars=["ford","lambo","bmw"];
        
    return(
        <li>
          { cars.map((car)=><li>{car}</li>)}
        </li>

    );
    }
  
 return (
     
     <div >
      
      <div className="card p-3">
          <div>
              <ul>
                {
                 value && <Shoot/>
                 
                  
                 
                    
                }

              
               <button className="btn btn-primary mx-4" text="nati" onClick={()=> setValue("True")}>add</button>
             
               </ul>
          </div>
          </div>
   <Modal/>
      
    </div>

    );
}
export default Todo;