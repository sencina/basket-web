import React from 'react'
import AddPointsModal from '../../../common/component/addPointsModal/AddPointsModal'

describe('<AddPointsModal />', () => {
    beforeEach(() => {
      cy.mount(<AddPointsModal match={{
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
          isFinished: false
      }}/>)
    })
    it('renders', () => {
      // see: https://on.cypress.io/mounting-react
    })

    it('renders home modal', () => {

      cy.get('#add-points-home').click()
      cy.get('#home-add-points-modal').should('be.visible')
    })

  it('renders away modal', () => {

    cy.get('#add-points-away').click()
    cy.get('#away-add-points-modal').should('be.visible')
  })

    it('should change select value from points', function () {
        cy.get('#add-points-away').click()
        cy.get('#points-select-away').select(1)
        cy.get('#points-select-away').should('have.value', '2')
    });

    it('should change select value from player', function () {
        cy.get('#add-points-away').click()
        cy.get('#player-select-away').select(1)
        cy.get('#player-select-away').should('have.value', '7')
    });

    it('should change select value from quarter', function () {
        cy.get('#add-points-away').click()
        cy.get('#quarter-select-away').select(1)
        cy.get('#quarter-select-away').should('have.value', '2')
    });

    it('should change select value from minute', function () {
        cy.get('#add-points-away').click()
        cy.get('#minute-select-away').select(1)
        cy.get('#minute-select-away').should('have.value', '1')
    });
})

describe('AddPointsModal comoponent initializing correctly with disabled buttons', () => {

    beforeEach(() => {
     cy.mount(<AddPointsModal match={{
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
          isFinished: true
     }}/>)
      })

      it('should have disabled buttons', function () {
        cy.get('#add-points-home').should('be.disabled')
        cy.get('#add-points-away').should('be.disabled')
      });
})