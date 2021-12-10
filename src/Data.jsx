import React from "react";

const Date = (props) =>{
    const {respData} = props;

    return(
        <div>
            {respData.date}
        </div>
    )
}

export default Date