
describe('Test suite - Google Search', () => {

    beforeEach(() => {
   
        cy.visit('https://www.google.com/')
        cy.wait(200)

    })
   
    it('Validate Google search page', () => {
 
      cy.get('.lnXdpd').should("be.visible")
   
    });

    it('Validate simple google search', () => {
        
        cy.get('.gLFyf')
        .should('be.visible')
        .type('Elefante{enter}')
        cy.get('.Ftghae > .SPZz6b').should('contain', 'Elefantes')
 
    });

    it('Validate the number of results and the time to display them', () => {

        cy.get('.gLFyf').type('Elefante{enter}')
        cy.get('#result-stats').should('be.visible')
    });

    it('Validate error message if the search term doesn´t match', () => {
        
        cy.get('.gLFyf').type('Estlefantefgh{enter}')
        cy.get('#result-stats').should('be.visible')
        cy.get('[aria-level="3"]').should('contain', 'No se han encontrado resultados para tu búsqueda (Estlefantefgh).')
    });

    it('Validate settings option', () => {
        
        cy.get('.gLFyf').type('Elefante{enter}')
        cy.wait(200)
        cy.get('.c58wS').should('be.visible')
        cy.get('.c58wS').click()
        cy.get('.tGS0Nc').should('contain', 'Ver toda la configuración')

    });
});
