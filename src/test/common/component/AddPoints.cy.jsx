import React from 'react'
import AddPoints from '../../../common/component/addPoints/AddPoints'

describe('<AddPoints />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AddPoints />)
  })
})