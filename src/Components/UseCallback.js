import axios from "axios";
import React, {useState} from "react";
import Child from "./Child";

export default function useCallback() {
    const [toggle,setToggle] = useState(false);
    const[data,setData] = useState("Yoh, Welkum to my creative space!")

    const returnComment = () =>{
        return data;
    }

    return(
        <>
      <div className="App">
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