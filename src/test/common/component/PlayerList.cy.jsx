import React from 'react'
import PlayerList from '../../../common/component/playerList/PlayerList'

describe('<PlayerList />', () => {

  beforeEach(() => {
    cy.mount(<PlayerList />)
  })

  it('renders list', () => {
    cy.get('.player-list-item').should('have.length', 5)
  })
})