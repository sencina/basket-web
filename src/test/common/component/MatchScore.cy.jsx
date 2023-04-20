import React from 'react'
import MatchScore from '../../../common/component/matchScore/MatchScore'

describe('MatchSocre comoponent initializing correctly with data', () => {

  beforeEach(() => {
    cy.mount(<MatchScore match={{
      matchId:'1',
      localTeam: {
        teamId: 1,
        name: 'Home Team',
        score: 27,
        players: [{id:'1',name: 'player1'}, {id:'2',name: 'player2'},{id:'3',name: 'player3'}, {id:'4',name: 'player4'}, {id:'5',name: 'player5'}]
      },
      awayTeam: {
        teamId: 2,
        name: 'Away Team',
        score: 99,
        players: [{id:'6',name: 'player1'}, {id:'7',name: 'player2'},{id:'8',name: 'player3'}, {id:'9',name: 'player4'}, {id:'0',name: 'player5'}]
      },
      isFinished: false}
    }/>)
  })

  it('home title render correctly', () => {
    // see: https://on.cypress.io/mounting-react
    const homeTitle = cy.get('#homeName')
    assert(homeTitle.contains('Home Team'))
  })

  it('away title render correctly', function () {
    const awayTitle = cy.get('#awayName')
    assert(awayTitle.contains('Away Team'))
  });

    it('home points render correctly', function () {
    const homePoints = cy.get('#homePoints')
    assert(homePoints.contains('27'))
    })

    it('away points render correctly', function () {
    const awayPoints = cy.get('#awayPoints')
    assert(awayPoints.contains('99'))
    })
})