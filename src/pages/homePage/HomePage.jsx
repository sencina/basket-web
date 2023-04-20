import React, {useState} from "react";
import './HomePage.css'
import Navbar from "../../common/component/navbar/Navbar";
import MatchScore from "../../common/component/matchScore/MatchScore";
import PlayerList from "../../common/component/playerList/PlayerList";
import AddPointsModal from "../../common/component/addPointsModal/AddPointsModal";

const HomePage = () => {

    const [currentMatch, setCurrentMatch] = useState({
        matchId:'1',
        localTeam: {
            teamId: 1,
            name: 'Home Team',
            score: 69,
            players: [{id:'1',name: 'player1'}, {id:'2',name: 'player2'},{id:'3',name: 'player3'}, {id:'4',name: 'player4'}, {id:'5',name: 'player5'}]
        },
        awayTeam: {
            teamId: 2,
            name: 'Away Team',
            score: 42,
            players: [{id:'6',name: 'player1'}, {id:'7',name: 'player2'},{id:'8',name: 'player3'}, {id:'9',name: 'player4'}, {id:'0',name: 'player5'}]
        },
        isFinished: false
    })

    return(
        <div className={'home-background'}>
            <div className={'home-menu-container'}>
                <div className={'home-title-container'}>
                    <h1 className={'home-page-title'}>-WEB</h1>
                </div>
                <div className={'home-navbar-container'}>
                    <Navbar currentPage={'Match Statistics'}/>
                </div>
                <div className={'search-match-container'}>
                </div>
                <div className={'home-statistics-container'}>
                    <div className={'home-page-name-container'}>
                        <h2>Match Statistics</h2>
                    </div>
                    <MatchScore id={'add-points-modal'} match={currentMatch}/>
                    <AddPointsModal match={currentMatch}/>
                    <div className={'home-page-name-container'}>
                        <h2>Players</h2>
                    </div>
                    <PlayerList match={currentMatch}/>
                </div>
            </div>
        </div>


    )

}

export default HomePage
