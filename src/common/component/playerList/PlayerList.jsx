import React, {useState} from "react";
import './PlayerList.css'

const PlayerList = ({match}) => {

    const getPlayerList = () => {

        const toReturn = []

        for(let i = 0; i < 5; i++){
            toReturn.push(
                <>
                    <div className={'player-list-item'} key={i} id={'players-row-'+i}>
                        <h3 key={'home-'+i} className={'player-list-player-name'}>{match.localTeam.players[i].name}</h3>
                        <h3 key={'away-'+i} className={'player-list-player-name away'}>{match.visitorTeam.players[i].name}</h3>
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