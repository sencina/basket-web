import React, {useState} from "react";
import './HomePage.css'
import MatchScore from "../../common/component/matchScore/MatchScore";
import PlayerList from "../../common/component/playerList/PlayerList";
import AddPointsModal from "../../common/component/addPointsModal/AddPointsModal";
import CreateMatchModal from "../../common/component/createMatchModal/CreateMatchModal";

const HomePage = () => {

    const [currentMatch, setCurrentMatch] = useState({
        matchId:'1',
        localTeam: {
            teamId: 1,
            name: 'Home Team',
            score: 69,
            players: [{id:'1',name: 'player1'}, {id:'2',name: 'player2'},{id:'3',name: 'player3'}, {id:'4',name: 'player4'}, {id:'5',name: 'player5'}]
        },
        visitorTeam: {
            teamId: 2,
            name: 'Away Team',
            score: 42,
            players: [{id:'6',name: 'player6'}, {id:'7',name: 'player7'},{id:'8',name: 'player8'}, {id:'9',name: 'player9'}, {id:'0',name: 'player0'}]
        },
        isFinished: false
    })
    const [showCreateMatchModal, setShowCreateMatchModal] = useState(false)
    const [teams, setTeams] = useState([{teamId: 'a', name:'lakers'},{teamId: 'b', name:'warriors'}])
    const [locations, setLocations] = useState(['home-stadium','away-stadium'])
    const [matches, setMatches] = useState([{
        matchId:'1',
        localTeam: {
            teamId: 1,
            name: 'Home Team',
            score: 69,
            players: [{id:'1',name: 'player1'}, {id:'2',name: 'player2'},{id:'3',name: 'player3'}, {id:'4',name: 'player4'}, {id:'5',name: 'player5'}]
        },
        visitorTeam: {
            teamId: 2,
            name: 'Away Team',
            score: 42,
            players: [{id:'6',name: 'player6'}, {id:'7',name: 'player7'},{id:'8',name: 'player8'}, {id:'9',name: 'player9'}, {id:'0',name: 'player0'}]
        },
        isFinished: false
    },
        {
            matchId:'2',
            localTeam: {
                teamId: 2,
                name: 'lakers',
                score: 0,
                players: [{id:'1',name: 'player1'}, {id:'2',name: 'player2'},{id:'3',name: 'player3'}, {id:'4',name: 'player4'}, {id:'5',name: 'player5'}]
            },
            visitorTeam: {
                teamId: 3,
                name: 'warriors',
                score: 0,
                players: [{id:'6',name: 'player6'}, {id:'7',name: 'player7'},{id:'8',name: 'player8'}, {id:'9',name: 'player9'}, {id:'0',name: 'player0'}]
            },
            isFinished: false
        }
    ])

    const handleChangeData = (key) => (event) => {
        setMatchData({...matchData, [key]: event.target.value})
    }

    const handleSubmit = (match) => {

    }

    const handleButtonClick = () => {
        setShowCreateMatchModal(true)
    }

    const handleOutsideClick = () => {
        setShowCreateMatchModal(false)
    }

    const appendMatches = () => {
        const toReturn = []
        for(const index in matches){
            const match = matches[index]
            toReturn.push(<option value={match.matchId}>{match.localTeam.name} vs {match.visitorTeam.name}</option>)
        }
        return toReturn
    }

    const handleMatchChange = (event) => {
        const matchId = event.target.value
        const match = matches.find(match => match.matchId === matchId)
        setCurrentMatch(match)
    }

    return(
        <div className={'home-background'}>
            <div className={'home-menu-container'}>
                <div className={'home-title-container'}>
                    <h1 className={'home-page-title'}>-WEB</h1>
                </div>
                <div className={'search-match-container'}>
                </div>
                <div className={'home-statistics-container'}>
                    <div className={'home-page-name-container'}>
                        <h2>Match Statistics</h2>
                        <button id={'create-modal-button'} className={'home-page-button'} onClick={handleButtonClick}>Create Match</button>
                        <select className={'matches-select'} onChange={handleMatchChange}>
                            {appendMatches()}
                        </select>
                    </div>
                    <MatchScore id={'add-points-modal'} match={currentMatch}/>
                    <AddPointsModal match={currentMatch}/>
                    <div className={'home-page-name-container'}>
                        <h2>Players</h2>
                    </div>
                    <PlayerList match={currentMatch}/>
                </div>
            </div>
            {showCreateMatchModal && <CreateMatchModal handleChange={handleChangeData} handleSubmit={handleSubmit} handleOutsideClick={handleOutsideClick} teams={teams} locations={locations}/>}
        </div>

    )

}

export default HomePage
