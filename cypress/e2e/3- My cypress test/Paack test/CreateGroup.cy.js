/// <reference types="cypress" />

describe('Create Group for Paack' , () => {

    beforeEach(() => {
        cy.visit('https://wms.staging.paack.app/login')
        cy.get('[name="loginForm_email"]').type('ps.valles@paack.co')
        cy.get('[name="loginForm_password"]').type('promise.circle')
        cy.get('.box--margin-top-s7 > [data-testid="box"]').click()
    })

    it('Create a group and then delete it' , () =>{

      //Genereaza un text random de 10 caractere
     const randomText = getRandomText(14)

              //click groups
        cy.get('[aria-label="Groups"] > .typography').click()   

              //click + icon to create new group
        cy.get('[data-testid="tooltip-container-id"] > .box--padding-x-s3').should('be.visible');
        cy.get('[data-testid="tooltip-container-id"] > .box--padding-x-s3', {timeout: 3000}).click() 

              // click crossDocking checkbox
        //cy.get('.radio__input', { timeout: 3000 }).should('be.visible').check('ZipCodesCriterion', { force: true })
        cy.contains('span', 'Cross-dock').click
              // click Next
        cy.get('button[data-testid="box"]').contains('Next').click() 
        cy.get('.textfield').type(randomText)  //insert text
        cy.get('.textfield').should('have.value', randomText)   //asertie dupa textul inserat
        // cy.get('[name="createGroup_name"]').type('test_group') //insert text
         cy.get('button[data-testid="box"]').click() //click Next
         cy.get('span[data-testid="box"]').click() //click Postal code Checkbox
        //cy.contains('button', 'Save').click()// click Save
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