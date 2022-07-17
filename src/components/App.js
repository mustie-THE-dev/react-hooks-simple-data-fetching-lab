// create your App component here

import { useEffect } from "react"
import { useState } from "react";


function App(){
    const [dogImg, setImg] = useState()
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res)=>res.json())
        .then((data)=>{
         console.log(data)
         setImg(data.message)
        })
    
    },[]);

  
    return(
        <>
       {dogImg?  <img src={dogImg} alt="A Random Dog"></img>: <p>Loading...</p>}
       
        </>
    )

}

export default App;