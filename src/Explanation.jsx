import React from "react";

const Explanation = (props) =>{
    const {respData} = props;

    return(
        <div>
            <img src={respData.explanation} alt="HDurl" />
        </div>
    )
}

export default Explanation