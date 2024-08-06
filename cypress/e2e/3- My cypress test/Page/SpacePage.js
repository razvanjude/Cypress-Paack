import { BasePage } from "../Base Page/basePage"


export class SpacePage extends BasePage {

    spacePageElements = {
        spaceButton: () => cy.get('[aria-label="Spaces"] > .typography'),
        spaceNameField: () => cy.get('[name="space_name"]'),
        grouptabButton: () => cy.get('[aria-label="Groups"] > .typography'),
        addGroupButton: () => cy.get('[data-testid="empty-state-button"]'),
        selectAllCheckBox: () => cy.get('[data-testid="form-control-label"] > [data-testid="stack-linear"] > .typography'),
        assignGroups: () => cy.get('button[data-testid="box"]'),
        updateWithSuccess: () => cy.get('.main__alert > .alert > [data-testid="box"] > .typography'),
        removeGroupFromSpace: () => cy.get('button[data-testid="box"].button--danger'),
        confirmRemoveGroup: () => cy.contains('button', 'Yes, remove')
    }

    goToSpace(){
        cy.wait(2000)
        this.clickMenuButton('Spaces')
        }   

    insertSpaceName(name){                
        this.spacePageElements.spaceNameField().clear().type(name)
    }

    clickAddGroup(){
        this.spacePageElements.addGroupButton().click()
    }

    clickSelectAll(){
        this.spacePageElements.selectAllCheckBox().click()
    }

    clickAssignButton(){
        this.spacePageElements.assignGroups().contains('Assign').click()
        //this.clickAssignButton('Assign')
    }

    updateSuccess(){
       this.spacePageElements.updateWithSuccess().should('have.text', 'Updated successfully')
        //this.updateSuccess('Updated successfully')
    }

    clickRmvGroup(){
        cy.wait(2000)
        this.spacePageElements.confirmRemoveGroup().should('be.visible').click({ force: true })
    }

    removeGroup(){
        this.spacePageElements.removeGroupFromSpace().click()
    }
}