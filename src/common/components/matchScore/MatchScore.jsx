import React from 'react'
import './MatchScore.css'

const MatchScore = ({home, away}) => {

    return(

        <div className={'score-container'}>
            <div className={'score-name-container'}>
                <h2>{home.name}</h2>
                <h2>vs</h2>
                <h2>{away.name}</h2>
            </div>
            <div className={'score-name-container'}>
                <h2 className={'score-points home-points'}>{home.points}</h2>
                <h2 className={'score-points away-points'}>{away.points}</h2>
            </div>
        </div>
    )

}

export default MatchScore