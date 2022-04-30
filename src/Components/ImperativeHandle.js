import React from 'react'
import Button from './Button'
import '../Components/ImperativeHandle.css'
function ImperativeHandle() {
  return (
    <div className='handle-div'>
        <button className='handle'>
            Button From Parent
        </button>
        <Button />
    </div>
  )
}

export default ImperativeHandle