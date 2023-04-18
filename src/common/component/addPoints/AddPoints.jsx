import './AddPoints.css'
import React from "react";

const AddPoints = ({match, updateMatch}) => {

    return(

        <div className={'add-points-container'}>
            <button id={'home-add-pints-button'} className={'add-points-button'}>Add points</button>
            <button id={'away-add-pints-button'} className={'add-points-button'}>Add points</button>
        </div>
    )

}

export default AddPoints