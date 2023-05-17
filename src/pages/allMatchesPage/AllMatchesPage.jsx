import './AllMatchesPage.css'
import React, {useEffect, useState} from "react";
import {useRequestService} from "../../service/requestService";
import {useNavigate} from "react-router";

const AllMatchesPage = () => {

    const service = useRequestService()
    const [previousSeason, setPreviousSeason] = useState([
        // {
        //     matchId:'1',
        //     home_team: {
        //         teamId: 1,
        //         full_name: 'Home Team',
        //         score: 69,
        //         players: [{id:'1',name: 'player1'}, {id:'2',name: 'player2'},{id:'3',name: 'player3'}, {id:'4',name: 'player4'}, {id:'5',name: 'player5'}]
        //     },
        //     visitor_team: {
        //         teamId: 2,
        //         full_name: 'Away Team',
        //         score: 42,
        //         players: [{id:'6',name: 'player6'}, {id:'7',name: 'player7'},{id:'8',name: 'player8'}, {id:'9',name: 'player9'}, {id:'0',name: 'player0'}]
        //     },
        //     isFinished: false
        // },
        // {
        //     matchId:'2',
        //     localTeam: {
        //         teamId: 2,
        //         name: 'lakers',
        //         score: 0,
        //         players: [{id:'1',name: 'player1'}, {id:'2',name: 'player2'},{id:'3',name: 'player3'}, {id:'4',name: 'player4'}, {id:'5',name: 'player5'}]
        //     },
        //     visitorTeam: {
        //         teamId: 3,
        //         name: 'warriors',
        //         score: 0,
        //         players: [{id:'6',name: 'player6'}, {id:'7',name: 'player7'},{id:'8',name: 'player8'}, {id:'9',name: 'player9'}, {id:'0',name: 'player0'}]
        //     },
        //     isFinished: false
        // }
    ])
    const navigate = useNavigate();

    useEffect( () => {
        try {
            service.getPreviousSeason().then(response => {
                const shortenedResponse = response.data.slice(0, 7)
                setPreviousSeason(shortenedResponse)
            })
        }catch (e) {
            console.log(e)
        }

    },[])

    const handleClick = () => {
        navigate('/');
    };

    return(
        <div className={'matches-background'}>
            <div className={'home-menu-container'}>
                <div className={'matches-container'}>
                    <div className={'home-title-container'}>
                        <h1 id={'home-page-title'} className={'home-page-title'}>-MATCHES</h1>
                    </div>

                    {
                        previousSeason.map(match => {

                            return(
                                <div className={'previous-season-match'}>
                                    {match.home_team.full_name} vs {match.visitor_team.full_name} | {match.home_team_score} - {match.visitor_team_score} | {match.season}
                                </div>
                            )
                        })
                    }
                </div>
                <button id={'gohome-page-button'} className={'gohome-page-button'} onClick={handleClick}>Return Home</button>
            </div>
        </div>
    )
}

export default AllMatchesPage