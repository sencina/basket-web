import React, {useState} from "react";
import './PlayerList.css'

const PlayerList = ({match}) => {

    const getPlayerList = () => {

        const toReturn = []

        for(let i = 0; i < match.localTeam.players.length; i++){
            toReturn.push(
                <>
                    <div className={'player-list-item'} key={i} id={'players-row-'+match.localTeam.players[i].id}>
                        <h3 className={'player-list-player-name'}>{match.localTeam.players[i].name}</h3>
                        <h3 className={'player-list-player-name away'}>{match.awayTeam.players[i].name}</h3>
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