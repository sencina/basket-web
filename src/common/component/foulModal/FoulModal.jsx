import React, {useEffect} from 'react'
import './FoulModal.css'
import LabeledInput from "../labeledInput/LabeledInput";

const FoulModal = ({modalRef,handleOutsideClick,handleChange, side, team, handleSubmit}) => {

    return(
        <div id={side+'-add-points-modal'} className="modal" onClick={handleOutsideClick}>
            <div className="modal-content-foul"  ref={modalRef}>
                <div className="modal-content-title">
                    <h2> {team.name} </h2>
                </div>
                <div className={'add-points-modal-input-containers'}>
                    <LabeledInput options={team.players} label={'Player'} handleChange={handleChange('playerId')} side={side}/>
                    <LabeledInput options={['YELLOW_CARD', 'RED_CARD']} label={'Type'} handleChange={handleChange('type')} side={side}/>
                    {/*<LabeledInput options={[1,2,3,4]} label={'Quarter'} handleChange={handleChange('quarter')} side={side}/>*/}
                    {/*<LabeledInput options={[0,1,2,3,4,5,6,7,8,9,10,11]} label={'Minute'} handleChange={handleChange('minute')} side={side}/>*/}
                    <div className={'points-modal-button-container'}>
                        <button className={'add-points-button center-button'} onClick={handleSubmit}>Add foul</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoulModal