import React, {useLayoutEffect, useEffect} from 'react'

function LayoutEffect() {
    useLayoutEffect(() => {
        console.log("useLayoutEffect")
    }, []);

    useEffect(() =>{
        console.log("useEffect")
    }, [])
  return (
    <div></div>
  )
}

export default LayoutEffect