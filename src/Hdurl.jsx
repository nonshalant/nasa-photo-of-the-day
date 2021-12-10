import React from "react";

const Hdurl = (props) =>{
    const {respData} = props;

    return(
        <div>
            <img src={respData.hdurl} alt="HDurl" />
        </div>
    )
}

export default Hdurl