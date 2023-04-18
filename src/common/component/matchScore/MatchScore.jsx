import React from 'react'
import './MatchScore.css'

const MatchScore = ({home, away}) => {

    return(

        <div className={'score-container'}>
            <div className={'score-name-container'}>
                <h2 id={'homeName'}>{home.name}</h2>
                <h3>vs</h3>
                <h2 id={'awayName'}>{away.name}</h2>
            </div>
            <div className={'score-name-container'}>
                <h2 className={'score-points home-points'} id={'homePoints'}>{home.points}</h2>
                <h2 className={'score-points away-points'} id={'awayPoints'}>{away.points}</h2>
            </div>
        </div>
    )

}

export default MatchScore