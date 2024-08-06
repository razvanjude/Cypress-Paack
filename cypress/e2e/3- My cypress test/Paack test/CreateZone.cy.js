/// <reference types="cypress" />

describe('Create a Zone for Paack' , () => {

    beforeEach(() => {
        cy.visit('https://wms.staging.paack.app/login')
        cy.get('[name="loginForm_email"]').type('ps.valles@paack.co')
        cy.get('[name="loginForm_password"]').type('promise.circle')
        cy.get('.box--margin-top-s7 > [data-testid="box"]').click()
    })

    it ('Create a zone and then delete it' , () =>{

         //click zone
         cy.get('[aria-label="Zones"] > .typography').click()   
        
         //create a new zone
         cy.get('[data-testid="tooltip-container-id"] > .box--padding-x-s3').click()
         cy.get('[name="zone_name"]').type('00_test_zone')

         //click save
         cy.get('[data-testid="modal-footer"] > .button--primary').click()

         //click on settings and press delete
         cy.contains('button.tab-item__button', 'Settings').click()
         cy.get(':nth-child(2) > .box--padding-x-s6').click()
         cy.get('[data-testid="modal-footer"] > .button--danger').click()

         //logout
         cy.get('.sidebar-item--footer > .typography').click()
         cy.get('.box--margin-top-s7 > [data-testid="box"]').should('have.text', 'Login')
    })

})