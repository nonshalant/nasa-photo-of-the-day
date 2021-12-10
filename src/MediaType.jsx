import React from "react";

const MediaType = (props) =>{
    const {respData} = props;

    return(
        <div>
            <img src={respData.media_type} alt="HDurl" />
        </div>
    )
}

export default MediaType