import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Copyright from "./Copyright";
import Date from "./Data";
// import Explanation from "./Explanation";
import Hdurl from "./Hdurl";
import MediaType from "./MediaType";
// import Service from "./ServiceVersion";
// import Title from "./Title";
import Url from "./Url";



function App() {
  const [respData, setRespData] = useState({});

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=koSoeKoW8kDf1ksWBlA6PT9TphlGcMHOiF5Zubf9')
    .then(resp =>{
      setRespData(resp.data);
      
    })
    .catch(error =>{
      console.log(error)
    })
    
  }, [])

  return (
    <div className="App">
        <Copyright respData={respData}/>
        <Date respData={respData} />
        {/* <Explanation respData={respData} /> */}
        <Hdurl respData={respData} />
        <MediaType respData={respData} />
        {/* <Service respData={respData} /> */}
        {/* <Title respData={respData} /> */}
        <Url respData={respData} /> 
    
    </div>
  );
}

export default App;
