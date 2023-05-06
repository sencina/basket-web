import React from 'react'
import HomePage from '../../../pages/homePage/HomePage'

describe('<HomePage />', () => {
  beforeEach(() => {
    cy.mount(<HomePage />)
  })
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
  })

  it('opens create match modal', () => {
    cy.get('#create-modal-button').click()
    cy.get('#create-match-modal').should('be.visible')
  })

  it('select player changing value in create modal', () => {
    cy.get('#create-modal-button').click()
    cy.get('#home-select-home').should('be.visible')
    //cy.get('#home-select-home').select(1)
    //cy.get('#home-select-home').should('have.value', 'b')
  })
})