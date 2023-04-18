import './AddPointsModal.css'
import React, {useState} from "react";

const AddPointsModal = (props) => {

    const [isVisibleHome, setIsVisibleHome] = useState(false);
    const [isVisibleAway, setIsVisibleAway] = useState(false);

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

    return(
        <div className={'add-points-container'}>
            <button className={'add-points-button'} onClick={showHomeModal}>Add points</button>
            <button className={'add-points-button'} onClick={showAwayModal}>Add points</button>
            {isVisibleHome && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-content-title">
                            <h2> Home </h2>
                        </div>
                        <span className="close" onClick={hideHomeModal}>
                          &times;
                        </span>
                        {props.children}
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
                        {props.children}
                    </div>
                </div>
            )}
        </div>
    )

}

export default AddPointsModal