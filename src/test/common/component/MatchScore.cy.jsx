import React from 'react'
import MatchScore from '../../../common/component/matchScore/MatchScore'

describe('MatchSocre comoponent initializing correctly with data', () => {

  beforeEach(() => {
    cy.mount(<MatchScore home={{name:'home', points:27}} away={{name:'away', points:99}}/>)
  })

  it('home title render correctly', () => {
    // see: https://on.cypress.io/mounting-react
    const homeTitle = cy.get('#homeName')
    assert(homeTitle.contains('home'))
  })

  it('away title render correctly', function () {
    const awayTitle = cy.get('#awayName')
    assert(awayTitle.contains('away'))
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

