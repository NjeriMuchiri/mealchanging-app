import React, { useState } from 'react'
import './StateTutorial.css';

function StateTutorial() {
    const[counter,setCounter] = useState(0);
    const[inputValue, setInputValue] = useState("Kashee");

       const increment = () => {
           setCounter(counter + 1)
       }
       let onChange = (e) =>{
           const newValue = e.target.value;
           setInputValue(newValue);
       }
      
  return (
      <>

    <div className='counter kashee'>
        {counter}
        <button className='clickable' onClick={ increment }> Increment</button>
        </div>
       <div className='njesh'>
           <input placeholder="input a value" onChange={onChange} />
           {inputValue}
       </div>
    </>
  )
}

export default StateTutorial;