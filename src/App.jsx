import React from "react"
import { featchVideo, fetchPhotos } from "./api/mediaApi"

const App = () => {



  return (
 <div className="h-screen w-wull bg-amber-300 ">
    <button className="m-5 bg-blue-400 " onClick={async ()=>{
      const data=await fetchPhotos('dog');
      console.log(data);      
      
      } }>Get Photo's </button>

      <button onClick={async ()=>{
        const data=await featchVideo('cat');
      console.log("prenting in app.jsx",data);
    }}>get video's</button>

    <br />
 
  </div>
)}

export default App
