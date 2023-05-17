import './AllMatchesPage.css'
import React, {useEffect, useState} from "react";
import {useRequestService} from "../../service/requestService";

const AllMatchesPage = () => {

    const service = useRequestService()
    const [previousSeason, setPreviousSeason] = useState([{
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

    useEffect( () => {
        try {
            service.getPreviousSeason().then(response => {
                setPreviousSeason(response.data)
            })
        }catch (e) {
            console.log(e)
        }

    },[])

    return(
        <div className={'matches-background'}>
            <div className={'home-menu-container'}>
                <div className={'home-title-container'}>
                    <h1 id={'home-page-title'} className={'home-page-title'}>-MATCHES</h1>
                </div>
                {
                    previousSeason.map(match => {
                        return(
                            <div className={'previous-season-match'}>
                                {match.localTeam.name} vs {match.visitorTeam.name}
                            </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default AllMatchesPage