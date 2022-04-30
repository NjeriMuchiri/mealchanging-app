import React, {useRef} from 'react'

function UseRef() {
   const inputRef = useRef(null);

   const onClick = () => {
       inputRef.current.value = "";
   };

  return (
    <div>
        <h1>Ann</h1>
        <input type="text" placeholder="Loves..." ref={inputRef}/>
        <button onClick={onClick}>Change Name</button>
    </div>
  )
}

export default UseRef