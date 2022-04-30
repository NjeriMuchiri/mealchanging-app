import React, {useRef} from 'react';
import Button from './Button';
import '../Components/ImperativeHandle.css';


function ImperativeHandle() {
    const buttonRef = useRef(null)
  return (
    <div className='handle-div'>
        <button 
        onClick={() =>
             {buttonRef.current.alterToggle()}} 
        className='handle' >
            Button From Parent
        </button>
        <Button ref={buttonRef}/>
    </div>
  )
}

export default ImperativeHandle;