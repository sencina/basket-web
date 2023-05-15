describe('template spec', () => {
//para correr esto tengo que correrlo con npm start a la pagina
//     beforeEach(() => {
//         cy.visit('/')
//     })

    it('should add fault',  async () => {
        cy.visit('/')

        cy.wait(1000) //so data loads

        cy.get('#add-foul-home').click()

        cy.get('#submit-add-points-button').click()

        cy.wait(1000) //so data loads

        cy.get('#homePoints').invoke('text').then(text => {
            text.match(/^[0-9]*$/)
        })

    })
})