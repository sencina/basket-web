describe('template spec', () => {
//para correr esto tengo que correrlo con npm start a la pagina
//     beforeEach(() => {
//         cy.visit('/')
//     })

    it('should add fault',  async () => {
        cy.visit('/')

        cy.wait(1000) //so data loads

        cy.get('#add-foul-home').click()

        cy.wait(1000) //so data loads
        //select the second player

        cy.get('#player-select-home').select(1);

        cy.get('#submit-add-foul-button').click()
        cy.wait(1000) //so data loads

        cy.get('#add-foul-modal-content').should('not.exist');

    })
})