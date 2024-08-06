/// <reference types="cypress" />

describe('Create Space for Paack' , () => {

    beforeEach(() => {
        cy.visit('https://wms.staging.paack.app/login')
        cy.get('[name="loginForm_email"]').type('ps.valles@paack.co')
        cy.get('[name="loginForm_password"]').type('promise.circle')
        cy.get('.box--margin-top-s7 > [data-testid="box"]').click()
    })

    it ('Should edit a space name' , () =>{

        //Genereaza un text random de 10 caractere
        const randomText = getRandomText(14)

        cy.get('[aria-label="Spaces"] > .typography').click() // click pe Space tab
        cy.get('#tab-2-undefined > .typography').click() // click pe Settings
        cy.contains('button', 'Edit').click() // click pe Edit
        cy.get('input[name="space_name"]').clear().type(randomText) // clear and insert text
        cy.contains('button', 'Save').click() // click pe Save
        cy.get('.alert').should('have.text', 'Updated successfully')
    })


    function getRandomText(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
      }
    
})