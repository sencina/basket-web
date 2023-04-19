import React from "react";
import './LabeledInput.css'

const LabeledInput = ({label, options, errorMessage, error, handleChange,side}) => {

    const appendOptions = () => {
        const toReturn = []
        for(const index in options){
            const option = options[index]
            toReturn.push(<option key={option} value={option}>{option}</option>)
        }
        return toReturn
    }

    return(
        <div className={`labeled-input-container ${error && 'error'}`}>
            <h5 className={'labeled-input-label'}>{label}</h5>
            <select id={label.toLowerCase()+'-select-'+side} className={'labeled-input-input'} onChange={handleChange}>
                {appendOptions()}
            </select>
            <h6 className={'labeled-input-errorMessage'}>{errorMessage}</h6>
        </div>
    )


}

export default LabeledInput