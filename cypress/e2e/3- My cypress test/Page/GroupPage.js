import { BasePage } from "../Base Page/basePage"

export class GroupPage extends BasePage {

    groupPageElements = {
        //group page
        selectXdocOption: () => cy.get('input#point-input-62').check({ force: true }),
        nextBtn: () => cy.get('[data-testid="modal-footer"] > .button--primary'),
        groupButton: () => cy.get('[aria-label="Groups"] > .typography'),
        changeColorBtn: () => cy.contains('button', 'Change Color'),
        selectBlueColor: () => cy.get('form > .stack--column > [data-testid="stack-linear"] > :nth-child(2) > [data-testid="box"]'),
        GroupSearchField: () => cy.get('.textfield'),
        settingsGroupOption: () => cy.get('#tab-2-undefined > .typography'),
        GroupInfo: () => cy.get('.typography--h6'),
        //SpacePalletBtn: () => cy.contains('button.tab-item__button', 'Spaces/Pallets'),
        addSpaceBtn: () => cy.get('[data-testid="empty-state-button"]'),
        //selectAll: () => cy.get('[data-testid="form-control-label"]'),
        removeSpaceFromGroup: () => cy.get('button[data-testid="box"].button--danger'),
        toggleButton: () => cy.get(':nth-child(4) > :nth-child(2) > .switch'),
        confirmDeactivateBtn: () => cy.get('[data-testid="modal-footer"] > .button--primary') 
     }

    goToGroup(){
        cy.wait(2000)
        this.clickMenuButton('Groups')
    }

    goToGroupSearchFiled(input){
        cy.wait(2000)
        this.groupPageElements.GroupSearchField().clear().type(input)
    }

    selectXDOption(){
        cy.wait(2000)
        this.loginPageElements.selectXdocOption().click()
    }

    checkGroupInfo(){
        cy.wait(2000)
        this.groupPageElements.GroupInfo().should('be.visible')
    }   

    clickAddSpaceBtn(){
        cy.wait(2000)
        this.groupPageElements.addSpaceBtn().click()
    }

    changeColorinGroup() {
        this.groupPageElements.changeColorBtn().click()
        cy.wait(2000)
        this.groupPageElements.selectBlueColor().click()
    }

    removeSpace() {
        this.groupPageElements.removeSpaceFromGroup().click()
    } 

    toggleButton() {
        cy.wait(2000)        
        this.groupPageElements.toggleButton().click() 
        
    }

    confirmDeactivation() {
        this.groupPageElements.confirmDeactivateBtn().click()
    }
}