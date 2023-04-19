import './AddPointsModal.css'
import React, {useState, useRef} from "react";
import LabeledInput from "../labeledInput/LabeledInput";

const AddPointsModal = ({match}) => {

    const [isVisibleHome, setIsVisibleHome] = useState(false);
    const [isVisibleAway, setIsVisibleAway] = useState(false);

    const [scoreData, setScoreData] = useState({
        matchId: match.id,
        team: '',
        player: '',
        points: 0,
    });

    const modalRef = useRef(null);

    const showHomeModal = () => {
        setIsVisibleHome(true);
    };

    const hideHomeModal = () => {
        setIsVisibleHome(false);
    };

    const showAwayModal = () => {
        setIsVisibleAway(true);
    };

    const hideAwayModal = () => {
        setIsVisibleAway(false);
    };

    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            hideHomeModal();
            hideAwayModal();
        }
    };

    const handleChange =(prop, team) => (event) => {
        setScoreData({ ...scoreData, [prop]: event.target.value, team: team});
    };

    return(
        <div className={'add-points-container'}>
            <button id={'add-points-home'} className={'add-points-button'} onClick={showHomeModal}>Add points</button>
            <button id={'add-points-away'} className={'add-points-button'} onClick={showAwayModal}>Add points</button>
            {isVisibleHome && Modal(match.home.players, hideHomeModal,modalRef,handleOutsideClick,handleChange,'home', match.home)}
            {isVisibleAway && Modal(match.away.players, hideAwayModal,modalRef,handleOutsideClick,handleChange,'away',match.away)}
        </div>
    )

}

const Modal = (players, hideHomeModal,modalRef,handleOutsideClick,handleChange, side, team) => {
    return(
        <div id={side+'-add-points-modal'} className="modal" onClick={handleOutsideClick}>
            <div className="modal-content"  ref={modalRef}>
                <div className="modal-content-title">
                    <h2> {team.name} </h2>
                </div>
                <span className="close" onClick={hideHomeModal}>
                          &times;
                        </span>
                <div className={'add-points-modal-input-containers'}>
                    <LabeledInput options={players} label={'Player'} handleChange={handleChange('player',team.name)} side={side}/>
                    <LabeledInput options={[1,2,3]} label={'Points'} handleChange={handleChange('points',team.name)} side={side}/>
                </div>
            </div>
        </div>
    )
}

export default AddPointsModal