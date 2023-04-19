import React, {useState} from "react";
import './PlayerList.css'

const PlayerList = ({match}) => {

    const getPlayerList = () => {

        const toReturn = []

        for(let i = 0; i < match.home.players.length; i++){
            toReturn.push(
                <>
                    <div className={'player-list-item'} key={i} id={'players-row-'+i}>
                        <h3 className={'player-list-player-name'}>{match.home.players[i]}</h3>
                        <h3 className={'player-list-player-name away'}>{match.away.players[i]}</h3>
                    </div>
                    <hr className={'player-list-hr'}></hr>
                </>
        )
        }

        return toReturn
    }

    return(
        <div className={'player-list-container'}>
            <div className={'player-list-players'}>
                {getPlayerList()}
            </div>
        </div>
    )

}

export default PlayerList