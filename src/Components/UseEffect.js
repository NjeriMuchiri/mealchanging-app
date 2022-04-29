import React, {useEffect,useState} from 'react';
// import '../Components/UseEffect.css';
import axios from 'axios';

function UseEffect() {

    const[data,setData] = useState("")

   useEffect(() => {
       axios.get("https://jsonplaceholder.typicode.com/comments")
       .then((response) =>{
           setData(response.data[0].email)
           console.log("Api was called")
       })
   }, [])
  return (
    <div>{data}</div>
  )
}

export default UseEffect