import React, {useState} from "react";
import './HomePage.css'
import Navbar from "../../common/component/navbar/Navbar";
import MatchScore from "../../common/component/matchScore/MatchScore";
import PlayerList from "../../common/component/playerList/PlayerList";
import AddPointsModal from "../../common/component/AddPointsModal/AddPointsModal";

const HomePage = () => {

    const [currentMatch, setCurrentMatch] = useState({
        home: {
            name: 'Home Team',
            points: 69
        },
        away: {
            name: 'Away Team',
            points: 42
        }
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
                    <MatchScore home={currentMatch.home} away={currentMatch.away}/>
                    <AddPointsModal match={currentMatch}/>
                    <div className={'home-page-name-container'}>
                        <h2>Players</h2>
                    </div>
                    <PlayerList/>
                </div>
            </div>
        </div>


    )

}

export default HomePage
