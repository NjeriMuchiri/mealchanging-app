import React, {useReducer} from 'react';
import './UseReducer.css';


const reducer = (state, action) =>{
     switch(action.type) {
       case "INCREMENT":
         return{count: state.count + 1, showText: state.showText};
        case "toggleShowText":
          return{count: state.count, showText: !state.showText };
        default:
          return state;
  }
};


function UseReducer() {
      const [state, dispatch] = useReducer(reducer, {count: 0, showText: true})

  return (
      <>
    <div className='reducer'>
        <h1 className='reducer-count'>{state.count}</h1>
        <button className='reducer-btn'
            onClick={() =>{
              dispatch({ type: "INCREMENT"});
              dispatch({ type: "toggleShowText" });
            }}>
                ClickHere
        </button>

        {state.showText && <p className='reducer-text'>This is a text</p>}
    </div>
    </>
  )
}

export default UseReducer