describe('template spec', () => {
//para correr esto tengo que correrlo con npm start a la pagina
//     beforeEach(() => {
//         cy.visit('/')
//     })

    it('should create match',  () => {
        cy.visit('/')

        cy.wait(1000) //so data loads

        cy.get('#create-modal-button').click()

        cy.wait(5000) //so data loads

        cy.get('#create-match-modal-content').should('be.visible')

        cy.get('#create-match-button-submit').click()

        cy.wait(1000) //so data loads

        cy.get('#create-match-modal-content').should('not.exist')


    })
})

