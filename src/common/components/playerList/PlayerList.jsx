import React, {useState} from "react";
import './PlayerList.css'

const PlayerList = () => {

    const [players, setPlayers] = useState({
        home: ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5"],
        away: ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5"]
    })

    const getPlayerList = () => {

        const toReturn = []

        for(let i = 0; i < players.home.length; i++){
            toReturn.push(
                <>
                    <div className={'player-list-item'} key={i}>
                        <h3 className={'player-list-player-name'}>{players.home[i]}</h3>
                        <h3 className={'player-list-player-name away'}>{players.away[i]}</h3>
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