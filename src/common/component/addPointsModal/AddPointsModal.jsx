import './AddPointsModal.css'
import React, {useState, useRef, useEffect} from "react";
import LabeledInput from "../labeledInput/LabeledInput";
import PointsModal from "../pointsModal/PointsModal";

const AddPointsModal = ({match}) => {

    const [isVisibleHome, setIsVisibleHome] = useState(false);
    const [isVisibleAway, setIsVisibleAway] = useState(false);

    const [scoreData, setScoreData] = useState({
        matchId: match.matchId,
        teamId: '',
        playerId: '',
        points: 0,
        minute: 0,
        quarter: 0,
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

    const handleSubmit = () => {

    }

    return(
        <div className={'add-points-container'}>
            <button id={'add-points-home'} className={'add-points-button'} onClick={showHomeModal} disabled={match.isFinished}>Add points</button>
            <button id={'add-points-away'} className={'add-points-button'} onClick={showAwayModal} disabled={match.isFinished}>Add points</button>
            {isVisibleHome && <PointsModal handleChange={handleChange} hideHomeModal={handleOutsideClick} modalRef={modalRef} handleOutsideClick={handleOutsideClick} team={match.localTeam} side={'home'}/>}
            {isVisibleAway && <PointsModal handleChange={handleChange} hideHomeModal={handleOutsideClick} modalRef={modalRef} handleOutsideClick={handleOutsideClick} team={match.awayTeam} side={'away'}/>}
        </div>
    )

}

export default AddPointsModal