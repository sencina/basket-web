import React, {useEffect} from 'react'
import './PointsModal.css'
import LabeledInput from "../labeledInput/LabeledInput";

const PointsModal = ({modalRef,handleOutsideClick,handleChange, side, team, handleSubmit, handleRender}) => {

    useEffect(() => {
        handleRender()
    })

    return(
        <div id={side+'-add-points-modal'} className="modal" onClick={handleOutsideClick}>
            <div className="modal-content"  ref={modalRef}>
                <div className="modal-content-title">
                    <h2> {team.name} </h2>
                </div>
                <div className={'add-points-modal-input-containers'}>
                    <LabeledInput options={team.players} label={'Player'} handleChange={handleChange('playerId',team.name)} side={side}/>
                    <LabeledInput options={[1,2,3]} label={'Points'} handleChange={handleChange('points',team.name)} side={side}/>
                    <LabeledInput options={[1,2,3,4]} label={'Quarter'} handleChange={handleChange('quarter',team.name)} side={side}/>
                    <LabeledInput options={[0,1,2,3,4,5,6,7,8,9,10,11]} label={'Minute'} handleChange={handleChange('minute',team.name)} side={side}/>
                    <div className={'points-modal-button-container'}>
                        <button className={'add-points-button center-button'} onClick={handleSubmit}>Add points</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PointsModal