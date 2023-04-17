import React from 'react'
import Navbar from '../../../common/component/navbar/Navbar'

describe('<Navbar />', () => {

  beforeEach(() => {
    cy.mount(<Navbar />)
  })

  it('redirects to Player Statistics', () => {

    cy.get('#player-statistics-button').click()
    cy.url().should('include', '/player-statistics')

  })

  it('redirects to Match Statistics', function () {

    cy.get('#match-statistics-button').click()
    cy.url().should('include', '/')

  });
})