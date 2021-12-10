import React from "react";

const Service = (props) =>{
    const {respData} = props;

    return(
        <div>
            <img src={respData.service_version} alt="HDurl" />
        </div>
    )
}

export default Service