import './AddPointsModal.css'
import React, {useState, useRef, useEffect} from "react";
import PointsModal from "../pointsModal/PointsModal";
import FoulModal from "../foulModal/FoulModal";
import {useRequestService} from "../../../service/requestService";

const AddPointsModal = ({match, handleRefresh, id, scoreData, foulData, setScoreData, setFoulData, handleSubmitPoints, handleSubmitFoul}) => {

    const service = useRequestService()

    const [isVisibleHome, setIsVisibleHome] = useState(false);
    const [isVisibleAway, setIsVisibleAway] = useState(false);
    const [isVisibleHomeFault, setIsVisibleHomeFault] = useState(false);
    const [isVisibleAwayFault, setIsVisibleAwayFault] = useState(false);

    const modalRef = useRef(null);

    const showHomeModal = () => {
        setScoreData({...scoreData, matchId: match.id, playerId: match.localTeam.players[0].id})
        setIsVisibleHome(true);
    };

    const hideHomeModal = () => {
        setIsVisibleHome(false);
    };

    const showAwayModal = () => {
        setScoreData({...scoreData, matchId: match.id, playerId: match.visitorTeam.players[0].id})
        setIsVisibleAway(true);
    };

    const hideAwayModal = () => {
        setIsVisibleAway(false);
    };

    const hideAwayFoulModal = () => {
        setFoulData({...foulData, matchId: match.id, playerId: match.localTeam.players[0].id})
        setIsVisibleAwayFault(false);
    }

    const hideHomeFoulModal = () => {
        setFoulData({...foulData, matchId: match.id, playerId: match.visitorTeam.players[0].id})

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

    const handleChangeScore =(prop, isNumber) => (event) => {
        setScoreData({ ...scoreData, [prop]: isNumber ? parseInt(event.target.value) : event.target.value});
    };

    const handleChangeFoul =(prop) => (event) => {
        setFoulData({ ...foulData, [prop]: event.target.value});
    }

    const handlePointsModalRender = (playerId) => {
        setScoreData({...scoreData, matchId: match.id, playerId: playerId})
    }

    const handleFoulModalRender = (playerId) => {
        setFoulData({...foulData, matchId: match.id, playerId: playerId})
    }

    const modalHandleSubmitPoints = () => {
        handleSubmitPoints();
        handleRefresh()
        hideAwayModal()
        hideHomeModal()
        // local.window.reload()
    }

    return(
        <div className={'add-points-container'}>
            <div className={'button-pair-container'}>
                <button id={'add-points-home'} className={'add-points-button'} onClick={showHomeModal} disabled={match.isFinished}>Add points</button>
                <button id={'add-foul-home'} className={'add-points-button'} onClick={showHomeFoulModal} disabled={match.isFinished}>Add foul</button>
            </div>
            <div className={'button-pair-container'}>
                <button id={'add-points-away'} className={'add-points-button'} onClick={showAwayModal} disabled={match.isFinished}>Add points</button>
                <button id={'add-foul-away'} className={'add-points-button'} onClick={showAwayFoulModal} disabled={match.isFinished}>Add foul</button>
            </div>
            {isVisibleHome && <PointsModal handleChange={handleChangeScore} hideHomeModal={handleOutsideClick} modalRef={modalRef} handleOutsideClick={handleOutsideClick} team={match.localTeam} handleRender={handlePointsModalRender} handleSubmit={handleSubmitPoints} side={'home'}/>}
            {isVisibleAway && <PointsModal handleChange={handleChangeScore} hideHomeModal={handleOutsideClick} modalRef={modalRef} handleOutsideClick={handleOutsideClick} team={match.visitorTeam} handleRender={handlePointsModalRender} handleSubmit={handleSubmitPoints} side={'away'}/>}
            {isVisibleHomeFault && <FoulModal handleChange={handleChangeFoul} hideHomeModal={handleOutsideClick} modalRef={modalRef} handleOutsideClick={handleOutsideClick} team={match.localTeam} side={'home'} handleSubmit={handleSubmitFault} handleRender={handleFoulModalRender}/>}
            {isVisibleAwayFault && <FoulModal handleChange={handleChangeFoul} hideHomeModal={handleOutsideClick} modalRef={modalRef} handleOutsideClick={handleOutsideClick} team={match.visitorTeam} side={'away'} handleSubmit={handleSubmitFault} handleRender={handleFoulModalRender}/>}
        </div>
    )

}

export default AddPointsModal