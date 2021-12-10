import React from "react";


const Url = (props) =>{
    const {respData} = props;

    return(
        <div>
            <img src={respData.url} alt="url" />
        </div>
    )
}

export default Url