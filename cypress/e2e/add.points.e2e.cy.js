describe('template spec', () => {
//para correr esto tengo que correrlo con npm start a la pagina
//     beforeEach(() => {
//         cy.visit('/')
//     })

    it('should add points',  async () => {
        cy.visit('/')

        cy.wait(1000) //so data loads

        cy.get('#home-page-title').contains( '-WEB')
        cy.get('#homePoints').invoke('text')
            .should('match', /^[0-9]*$/)
        cy.get('#homePoints').invoke('text')
            .should('match', /^[0-9]*$/)

        cy.get('#homePoints').invoke('text').then(text => {
            assert(parseInt(text) >= 0)
        })

        cy.get('#add-points-home').click()

        cy.get('#submit-add-points-button').click()

        cy.wait(1000) //so data loads

        cy.get('#homePoints').invoke('text').then(text => {
            text.match(/^[0-9]*$/)
        })

    })
})