import { BasePage } from "../Base Page/basePage"

export class loginPage extends BasePage {

loginPageElements = {
   
    //login page
   username: () => cy.get('#username'),
   password: () => cy.get('#password'),
   continueBtn: () => cy.get('.c1d1b1e07'),
   loginButton: () => cy.get('button._button-login-password'),
   logoutButton: () => cy.get('.sidebar-item--footer > .typography'),
   logoImage: () => cy.get('#prompt-logo-center'),


   //settings modal
   deleteBtnSettings: () => cy.get(':nth-child(2) > .box--padding-x-s6'),
   //confirmDelButton: () => cy.get('[data-testid="modal-footer"] > .button--danger'),   
   settingsBtn: () => cy.contains('button.tab-item__button', 'Settings'),
   saveButton: () => cy.get('[data-testid="modal-footer"] > .button--primary'),

   //create new
   //createNewItem: () => cy.get('[data-testid="tooltip-container-id"] > .box--padding-x-s3'),
   //edtiButton: () => cy.contains('button', 'Edit'),

   //assertions
   updatetAlertMsg: () => cy.get('.alert').should('have.text', 'Updated successfully'),
   updateSuccessmessage: () => cy.get('.main__alert > .alert > [data-testid="box"] > .typography'),

   
}

goToHomepage(url){

    cy.visit(url)
}


fillfields(user,pass){
    this.loginPageElements.username().type(user)
    this.loginPageElements.continueBtn().click()
    this.loginPageElements.password().type(pass)
    this.loginPageElements.loginButton().click()

    this.loginPageElements.username().type(user)
    this.loginPageElements.continueBtn().click()
    this.loginPageElements.password().type(pass)
    this.loginPageElements.loginButton().click()
    
}

clickLogin(){
    this.loginPageElements.loginButton().click()

}

clickLogout(){
    this.loginPageElements.logoutButton().click()
    cy.wait(3000)
    this.loginPageElements.logoImage().should('be.visible')
}

verifyLogin(){
    this.loginPageElements.logoutButton().should('have.text', 'Logout')
}


// clickSave(){
//     this.loginPageElements.saveButton().click()
// }


clicknextBtn(){
    cy.wait(3000)
    this.loginPageElements.nextBtn().click()
}

// clickEditBtn() {
//     this.loginPageElements.edtiButton().click()
// }

updateMessage() {
    this.loginPageElements.updatetAlertMsg().should('have.text', 'Updated successfully')
}

// changeColorinGroup() {
//     this.loginPageElements.changeColorBtn().click()
//     cy.wait(2000)
//     this.loginPageElements.selectBlueColor().click()
// }

// goToSearch() {
//     cy.wait(3000)
//     this.loginPageElements.searchTab().click()
// }

// insertTextinSearchField() {
//     this.loginPageElements.searchField().type('test')
// }

// clickSearchButton() {
//     this.loginPageElements.searchButton().click()
// }

insertRandomTxtinSpaceName() {

    const randomText = this.getRandomText(14)  
    this.loginPageElements.spaceNameFiled().clear().type(randomText)   
    
}

}