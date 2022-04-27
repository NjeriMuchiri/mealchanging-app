import React, {useState} from 'react';
import './UseReducer.css';

function UseReducer() {
    const[count, setCount] = useState(0);
    const[showText, setShowText] = useState(true);

  return (
      <>
    <div className='reducer'>
        <h1 className='reducer-count'>{count}</h1>
        <button className='reducer-btn'
            onClick={() =>{
                setCount(count + 1);
                setShowText(!showText)
            }}>
                ClickHere
        </button>

        {showText && <p className='reducer-text'>This is a text</p>}
    </div>
    </>
  )
}

export default UseReducer