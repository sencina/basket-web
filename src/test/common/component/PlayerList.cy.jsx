import React from 'react'
import PlayerList from '../../../common/component/playerList/PlayerList'

describe('<PlayerList />', () => {

  beforeEach(() => {
    cy.mount(<PlayerList match={{
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
        players: [{id:'6',name: 'player1'}, {id:'7',name: 'player2'},{id:'8',name: 'player3'}, {id:'9',name: 'player4'}, {id:'0',name: 'player5'}]
      },
      isFinished: false}
    }/>)
  })

  it('renders list', () => {
    cy.get('.player-list-item').should('have.length', 5)
  })
})