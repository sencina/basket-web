import './AddPointsModal.css'
import React, {useState, useRef} from "react";
import PointsModal from "../pointsModal/PointsModal";
import FoulModal from "../foulModal/FoulModal";

const AddPointsModal = ({match}) => {

    const [isVisibleHome, setIsVisibleHome] = useState(false);
    const [isVisibleAway, setIsVisibleAway] = useState(false);
    const [isVisibleHomeFault, setIsVisibleHomeFault] = useState(false);
    const [isVisibleAwayFault, setIsVisibleAwayFault] = useState(false);

    const [scoreData, setScoreData] = useState({
        matchId: match.matchId,
        teamId: '',
        playerId: match.localTeam.players[0].id,
        points: 0,
        minute: 0,
        quarter: 1,
    });

    const [foulData, setFoulData] = useState({
        matchId: match.matchId,
        playerId: '',
        minute: 0,
        quarter: 1,
        type: 'Yellow Card'
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

    const hideAwayFoulModal = () => {
        setIsVisibleAwayFault(false);
    }

    const hideHomeFoulModal = () => {
        setIsVisibleHomeFault(false);
    }

    const showHomeFoulModal = () => {
        setIsVisibleHomeFault(true);
    }

    const showAwayFoulModal = () => {
        setIsVisibleAwayFault(true);
    }

    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            hideHomeModal();
            hideAwayModal();
            hideAwayFoulModal();
            hideHomeFoulModal();
        }
    };

    const handleChangeScore =(prop) => (event) => {
        setScoreData({ ...scoreData, [prop]: event.target.value});
    };

    const handleChangeFoul =(prop) => (event) => {
        setFoulData({ ...foulData, [prop]: event.target.value});
    }

    const handlePointsModalRender = (teamId,playerId) => {
        setScoreData({...scoreData, teamId: teamId, playerId: playerId})
    }

    const handleSubmit = () => {
    }

    return(
        <div className={'add-points-container'}>
            <div className={'button-pair-container'}>
                <button id={'add-points-home'} className={'add-points-button'} onClick={showHomeModal} disabled={match.isFinished}>Add points</button>
                <button id={'add-fault-home'} className={'add-points-button'} onClick={showHomeFoulModal} disabled={match.isFinished}>Add foul</button>
            </div>
            <div className={'button-pair-container'}>
                <button id={'add-points-away'} className={'add-points-button'} onClick={showAwayModal} disabled={match.isFinished}>Add points</button>
                <button id={'add-fault-away'} className={'add-points-button'} onClick={showAwayFoulModal} disabled={match.isFinished}>Add foul</button>
            </div>
            {isVisibleHome && <PointsModal handleChange={handleChangeScore} hideHomeModal={handleOutsideClick} modalRef={modalRef} handleOutsideClick={handleOutsideClick} team={match.localTeam} side={'home'} handleRender={handlePointsModalRender}/>}
            {isVisibleAway && <PointsModal handleChange={handleChangeScore} hideHomeModal={handleOutsideClick} modalRef={modalRef} handleOutsideClick={handleOutsideClick} team={match.visitorTeam} side={'away'} handleRender={handlePointsModalRender}/>}
            {isVisibleHomeFault && <FoulModal handleChange={handleChangeFoul} hideHomeModal={handleOutsideClick} modalRef={modalRef} handleOutsideClick={handleOutsideClick} team={match.localTeam} side={'home'} />}
            {isVisibleAwayFault && <FoulModal handleChange={handleChangeFoul} hideHomeModal={handleOutsideClick} modalRef={modalRef} handleOutsideClick={handleOutsideClick} team={match.visitorTeam} side={'away'} />}
        </div>
    )

}

export default AddPointsModal