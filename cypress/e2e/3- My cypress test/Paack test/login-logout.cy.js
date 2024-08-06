/// <reference types="cypress" />

describe('Login and Logout for Paack' , () => {

    beforeEach(() => {
        cy.visit('https://wms.staging.paack.app/login')
        cy.get('[name="loginForm_email"]').type('ps.valles@paack.co')
        cy.get('[name="loginForm_password"]').type('promise.circle')
        cy.get('.box--margin-top-s7 > [data-testid="box"]').click()
    })

   
    it ('login', () => {
        cy.get('.sidebar-item--footer > .typography').should('have.text', 'Logout')
    })

    it ('logout', () => {
        cy.get('.sidebar-item--footer > .typography').click()
        cy.get('.box--margin-top-s7 > [data-testid="box"]').should('have.text', 'Login')
    })
})