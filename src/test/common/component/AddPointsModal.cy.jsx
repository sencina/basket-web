import React from 'react'
import AddPointsModal from '../../../common/component/addPointsModal/AddPointsModal'

describe('<AddPointsModal />', () => {
    beforeEach(() => {
      cy.mount(<AddPointsModal match={{
        id: 1,
        home: {
        name: 'Home Team',
        points: 69,
        players: ['player1', 'player2', 'player3', 'player4', 'player5']
      },
        away: {
        name: 'Away Team',
        points: 42,
        players: ['player1', 'player2', 'player3', 'player4', 'player5']
      }
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
        cy.get('#player-select-away').should('have.value', 'player2')
    });
})