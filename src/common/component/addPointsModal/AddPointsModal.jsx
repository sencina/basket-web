import './AddPointsModal.css'
import React, {useState, useRef} from "react";
import PointsModal from "../pointsModal/PointsModal";
import FoulModal from "../foulModal/FoulModal";
import {useRequestService} from "../../../service/requestService";

const AddPointsModal = ({match, handleRefresh}) => {

    const service = useRequestService()

    const [isVisibleHome, setIsVisibleHome] = useState(false);
    const [isVisibleAway, setIsVisibleAway] = useState(false);
    const [isVisibleHomeFault, setIsVisibleHomeFault] = useState(false);
    const [isVisibleAwayFault, setIsVisibleAwayFault] = useState(false);

    const [scoreData, setScoreData] = useState({
        matchId: match.id,
        playerId: match.localTeam.players[0].id,
        points: 0
    });

    const [foulData, setFoulData] = useState({
        matchId: match.id,
        playerId: '',
        type: 'YELLOW_CARD'
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

    const handleChangeScore =(prop, isNumber) => (event) => {
        setScoreData({ ...scoreData, [prop]: isNumber ? parseInt(event.target.value) : event.target.value});
    };

    const handleChangeFoul =(prop) => (event) => {
        setFoulData({ ...foulData, [prop]: event.target.value});
    }

    const handlePointsModalRender = (playerId) => {
        setScoreData({...scoreData, playerId: playerId})
    }

    const handleSubmitPoints = async () => {
        await service.addPoints(scoreData)
        handleRefresh()
        hideHomeModal();
        hideAwayModal();
    }

    const handleSubmitFault = async () => {
        await service.addFault(foulData)
        hideAwayFoulModal();
        hideHomeFoulModal();
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
            {isVisibleHomeFault && <FoulModal handleChange={handleChangeFoul} hideHomeModal={handleOutsideClick} modalRef={modalRef} handleOutsideClick={handleOutsideClick} team={match.localTeam} side={'home'} handleSubmit={handleSubmitFault} />}
            {isVisibleAwayFault && <FoulModal handleChange={handleChangeFoul} hideHomeModal={handleOutsideClick} modalRef={modalRef} handleOutsideClick={handleOutsideClick} team={match.visitorTeam} side={'away'} handleSubmit={handleSubmitFault} />}
        </div>
    )

}

export default AddPointsModal