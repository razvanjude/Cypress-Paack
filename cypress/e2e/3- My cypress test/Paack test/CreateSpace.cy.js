/// <reference types="cypress" />

describe('Create Space for Paack' , () => {

    beforeEach(() => {
        cy.visit('https://wms.staging.paack.app/login')
        cy.get('[name="loginForm_email"]').type('ps.valles@paack.co')
        cy.get('[name="loginForm_password"]').type('promise.circle')
        cy.get('.box--margin-top-s7 > [data-testid="box"]').click()
    })

    it ('Create a space and then delete it' , () =>{

       cy.get('[aria-label="Spaces"] > .typography').click()
       cy.get('[data-testid="tooltip-container-id"] > .box--padding-x-s3').click()
       cy.get('[name="space_name"]').type('007_Cypress_test_space')
       cy.get('[data-testid="modal-footer"] > .button--primary').click()
       cy.contains('div.typography.typography--subtitle1.typography--gray-700.list-item__title', '007_Cypress_test_space')
      .should('exist');
       cy.wait(3000)
       cy.contains('button.tab-item__button', 'Settings').click()
       cy.get(':nth-child(2) > .box--padding-x-s6').click()
       cy.get('[data-testid="modal-footer"] > .button--danger').click()
       cy.get('.sidebar-item--footer > .typography').click()
       cy.get('.box--margin-top-s7 > [data-testid="box"]').should('have.text', 'Login')
    })

    // it('Logout', () => {
    //     cy.get('.sidebar-item--footer > .typography').click()
    //     cy.get('.box--margin-top-s7 > [data-testid="box"]').should('have.text', 'Login')
    // })
  
})
   