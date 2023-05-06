import React from "react";

const DateInput = ({handleChange}) => {

        return(
            <div className={`labeled-input-container`}>
                <h5 className={'labeled-input-label'}>Date</h5>
                <input type={"date"} onChange={handleChange}></input>
            </div>
        )
}

export default DateInput