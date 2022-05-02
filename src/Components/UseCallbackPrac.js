import axios from "axios";
import React, {useState,useCallback} from "react";
import Child from "./Child";

export default function useCallbackPrac() {
    const [toggle,setToggle] = useState(false);
    const[data,setData] = useState("Yoh, Welkum to my creative space!")

    const returnComment =useCallback((name) =>{
        return data + name;
    }, [data] );


    return(
        <>
      <div className="App" style={{minHeight: 120}}>
         <Child returnComment = {returnComment}/>

         <button
          onClick={() => {
              setToggle(!toggle)
          }}
         >
             {""}
          Toggle
         </button>
         {toggle && <h1>toggle</h1>}
      </div>
        </>
    )
}