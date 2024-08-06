/// <reference types="cypress" />

describe('Create Group for Paack' , () => {

    beforeEach(() => {
        cy.visit('https://wms.staging.paack.app/login')
        cy.get('[name="loginForm_email"]').type('ps.valles@paack.co')
        cy.get('[name="loginForm_password"]').type('promise.circle')
        cy.get('.box--margin-top-s7 > [data-testid="box"]').click()
    })

    it('Should edit color of a group ' , () =>{

        
        cy.get('[aria-label="Groups"] > .typography').click()  //click groups
        cy.get('.textfield').type('test123')  //insert text into search field
        cy.get('#tab-2-undefined > .typography').click() // click pe Settings
        cy.contains('button', 'Change Color').click() // click Change Color button
        cy.get('form > .stack--column > [data-testid="stack-linear"] > :nth-child(2) > [data-testid="box"]').click() // click on Blue color
        cy.contains('button', 'Save').click() // click pe Save button
        cy.wait(2000)
        
        //asertion for Blue color and "update successfully" message
        cy.get('.typography--body2 > [data-testid="stack-linear"] > :nth-child(2)').should('exist')
        cy.get('.main__alert > .alert > [data-testid="box"] > .typography').should('have.text', 'Updated successfully')
})

it ('Activate and deactivate a group ' , () =>{
      
         
        cy.get('[aria-label="Groups"] > .typography').click()  //click groups
        cy.get('.textfield').type('test123')  //insert text into search field
        cy.get('#tab-2-undefined > .typography').click() // click pe Settings

        checkAndToggleStatus() // check and toggle status

})


function checkAndToggleStatus() {
    // Selector for the status element as Inactive
    const statusSelector = '.typography.typography--body1.typography--red-600';
  
    // Selector for the toggle button 
    const toggleButtonSelector = '.switchmark.switchmark--md' // Replace with the actual selector    
  
    // Check the status text
    cy.get(statusSelector).then($status => {
      if ($status.text().trim() === 'Inactive') {
        // If the status is "Inactive", press the toggle button
        cy.get(toggleButtonSelector, { multiple: true }).click()
        cy.get('box box--padding-x-s8 button button--md button--primary').click()
      }
      else if ($status.text().trim() === 'Active') {
        // If the status is "Active", press the toggle button
        //cy.get(toggleButtonSelector, { multiple: true }).click()
        cy.get('.typography.typography--body1.typography--red-600').should('have.text', 'Active')
      }
    });
  }

})