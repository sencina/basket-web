import React from 'react'

const TeamLabelSelect = ({options, label, side, handleChange}) => {
    const appendOptions = () => {
        const toReturn = []
        for(const index in options){
            const option = options[index]
            toReturn.push(<option value={option.id}>{option.name}</option>)
        }
        return toReturn
    }

    return(
        <div className={'labeled-input-container'}>
            <h5 className={'labeled-input-label'}>{label}</h5>
            <select id={label.toLowerCase()+'-select-'+side} className={'labeled-input-input'} onChange={handleChange}>
                {appendOptions()}
            </select>
        </div>
    )
}

export default TeamLabelSelect