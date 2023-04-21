import React from 'react'
import './MatchScore.css'

const MatchScore = ({match}) => {

    return(

        <div className={'score-container'}>
            <div className={'score-name-container'}>
                <h2 id={'homeName'}>{match.localTeam.name}</h2>
                <h3>vs</h3>
                <h2 id={'awayName'}>{match.visitorTeam.name}</h2>
            </div>
            <div className={'score-name-container'}>
                <h2 className={'score-points home-points'} id={'homePoints'}>{match.localTeam.score}</h2>
                <h3 className={'score-is-finished-label'}>{match.isFinished ? 'Finished' : 'Live'}</h3>
                <h2 className={'score-points away-points'} id={'awayPoints'}>{match.visitorTeam.score}</h2>
            </div>
        </div>
    )

}

export default MatchScore