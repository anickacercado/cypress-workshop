/// <reference types="cypress" />

describe('TODO list page', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo')
      })

    it('Add two items ', () => {
        cy.get('[data-test=new-todo]').type('Learn JavaScript{enter}')
        cy.get('[data-test=new-todo]').type('Learn Cypress{enter}')
    });

    it('Check and item as completed & see completed items ', () => {
        cy.contains('Pay electric bill')
        .parent()
        .find('input[type=checkbox]')
        .check()

        cy.contains('Completed').click()
    }); 

    it('Go to Utilities', () => {
        cy.contains('Utilities').click()
        cy.url().should('include', '/utilities')
    }); 
    
});