import React from "react";

const Title = (props) =>{
    const {respData} = props;

    return(
        <div>
            <img src={respData.title} alt="HDurl" />
        </div>
    )
}

export default Title