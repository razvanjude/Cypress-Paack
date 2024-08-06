/// <reference types="cypress" />

describe('Search' , () => {

    beforeEach(() => {
        cy.visit('https://wms.staging.paack.app/login')
        cy.get('[name="loginForm_email"]').type('ps.valles@paack.co')
        cy.get('[name="loginForm_password"]').type('promise.circle')
        cy.get('.box--margin-top-s7 > [data-testid="box"]').click()
    })


    // it ('search for a package that exists', () => {
    //     cy.get('[aria-label="Search"]')
    //     cy.get('.textfield').type('test')
    //     cy.get('[data-testid="stack-linear"] > .box--padding-x-s8').click()
    //     cy.get('.stack--full-width > :nth-child(1) > .typography--h6').should('exist');
    // })

    // it ('search for a package that does not exists', () => {
    //     // Genereaza un text random de 10 caractere
    // const randomText = getRandomText(10)
    //     cy.get('[aria-label="Search"]')   //da click pe Search
    //     cy.get('.textfield').type(randomText) // insert text
    //     cy.get('.textfield').should('have.value', randomText)   //asertie dupa textul inserat
    //     cy.get('[data-testid="stack-linear"] > .box--padding-x-s8').click()   //da click pe Search
    //     cy.get('p[data-testid="empty-state-text"]').should('have.text', "We haven't found matches for your search.")
    // })

    // it ('search for a Space that exists', () => {
    //     cy.contains('p', 'Space').click()  //da click pe Space tab
    //     cy.get('[aria-label="Search"]')  // da click pe Search field
    //     cy.get('.textfield').type('00_space_4_test')  //insert text
    //     cy.get('[data-testid="stack-linear"] > .box--padding-x-s8').click() //click pe Search button
    //     cy.get('.box--padding-x-s3 > [data-testid="box"] > svg').should('exist') //verifica daca butonul de edit exista
    // })

    // it ('search for a Space that does not exists', () => {
    //      //Genereaza un text random de 10 caractere
    //  const randomText = getRandomText(14)
        
    //     cy.contains('p', 'Space').click()  //da click pe Space tab
    //     cy.get('[aria-label="Search"]')  // da click pe Search
    //     cy.get('.textfield').type(randomText)  //insert text
    //     cy.get('.textfield').should('have.value', randomText)   //asertie dupa textul inserat
    //     cy.get('[data-testid="stack-linear"] > .box--padding-x-s8').click()   //click pe Search button
    //     cy.get('p[data-testid="empty-state-text"]').should('have.text', "We haven't found matches for your search.")
    // })

    // it ('search for a Group that exists', () => {
    //     cy.contains('p', 'Group').click()  //da click pe Space tab
    //     cy.get('[aria-label="Search"]')  // da click pe Search field
    //     cy.get('.textfield').type('01_MAD_XD')  //insert text
    //     cy.get('[data-testid="stack-linear"] > .box--padding-x-s8').click() //click pe Search button
    //     cy.get('.box--padding-x-s3 > [data-testid="box"] > svg').should('exist') //verifica daca butonul de edit exista
    // })

    // it ('search for a Group that does not exists', () => {
    //      //Genereaza un text random de 10 caractere
    //  const randomText = getRandomText(14)
        
    //     cy.contains('p', 'Group').click()  //da click pe Space tab
    //     cy.get('[aria-label="Search"]')  // da click pe Search
    //     cy.get('.textfield').type(randomText)  //insert text
    //     cy.get('.textfield').should('have.value', randomText)   //asertie dupa textul inserat
    //     cy.get('[data-testid="stack-linear"] > .box--padding-x-s8').click()   //click pe Search button
    //     cy.get('p[data-testid="empty-state-text"]').should('have.text', "We haven't found matches for your search.")
    // })

    //it ('search for a Group that exists', () => {
    //     cy.contains('p', 'Group').click()  //da click pe Space tab
    //     cy.get('[aria-label="Search"]')  // da click pe Search field
    //     cy.get('.textfield').type('01_MAD_XD')  //insert text
    //     cy.get('[data-testid="stack-linear"] > .box--padding-x-s8').click() //click pe Search button
    //     cy.get('.box--padding-x-s3 > [data-testid="box"] > svg').should('exist') //verifica daca butonul de edit exista
    // })

    // it ('search for a Group that does not exists', () => {
    //      //Genereaza un text random de 10 caractere
    //  const randomText = getRandomText(14)
        
    //     cy.contains('p', 'Group').click()  //da click pe Space tab
    //     cy.get('[aria-label="Search"]')  // da click pe Search
    //     cy.get('.textfield').type(randomText)  //insert text
    //     cy.get('.textfield').should('have.value', randomText)   //asertie dupa textul inserat
    //     cy.get('[data-testid="stack-linear"] > .box--padding-x-s8').click()   //click pe Search button
    //     cy.get('p[data-testid="empty-state-text"]').should('have.text', "We haven't found matches for your search.")
    // })

    it ('search for a Zone that exists', () => {
        cy.contains('p', 'Zone').click()  //da click pe Space tab
        cy.get('[aria-label="Search"]')  // da click pe Search field
        cy.get('.textfield').type('Test3343777')  //insert text
        cy.get('[data-testid="stack-linear"] > .box--padding-x-s8').click() //click pe Search button
        cy.get('.box--padding-x-s3 > [data-testid="box"] > svg').should('exist') //verifica daca butonul de edit exista
    })

    it ('search for a Zone that does not exists', () => {
         //Genereaza un text random de 10 caractere
     const randomText = getRandomText(14)
        
        cy.contains('p', 'Zone').click()  //da click pe Space tab
        cy.get('[aria-label="Search"]')  // da click pe Search
        cy.get('.textfield').type(randomText)  //insert text
        cy.get('.textfield').should('have.value', randomText)   //asertie dupa textul inserat
        cy.get('[data-testid="stack-linear"] > .box--padding-x-s8').click()   //click pe Search button
        cy.get('p[data-testid="empty-state-text"]').should('have.text', "We haven't found matches for your search.")
    })

    // Function care genereaza un text random
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