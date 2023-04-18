import './AddPointsModal.css'
import React, {useState, useRef} from "react";

const AddPointsModal = ({match, updateMatch}) => {

    const [isVisibleHome, setIsVisibleHome] = useState(false);
    const [isVisibleAway, setIsVisibleAway] = useState(false);
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

    return(
        <div className={'add-points-container'}>
            <button className={'add-points-button'} onClick={showHomeModal}>Add points</button>
            <button className={'add-points-button'} onClick={showAwayModal}>Add points</button>
            {isVisibleHome && (
                <div className="modal" onClick={handleOutsideClick}>
                    <div className="modal-content"  ref={modalRef}>
                        <div className="modal-content-title">
                            <h2> Home </h2>
                        </div>
                        <span className="close" onClick={hideHomeModal}>
                          &times;
                        </span>
                    </div>
                </div>
            )}
            {isVisibleAway && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-content-title">
                            <h2> Away </h2>
                        </div>
                        <span className="close" onClick={hideAwayModal}>
                          &times;
                        </span>
                    </div>
                </div>
            )}
        </div>
    )

}

export default AddPointsModal