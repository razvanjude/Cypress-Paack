 export class BasePage {

    basePageElements = {
        MenuButton: () => cy.get('button.box'),
        TabButton: () => cy.get('button.tab-item__button'),
        selectAll: () => cy.get('[data-testid="form-control-label"]'),
        updateWithSuccess: () => cy.get('.main__alert > .alert > [data-testid="box"] > .typography'),
        assignButton: () => cy.get('button[data-testid="box"]'),
        removeButton: ()=> cy.contains('button', 'Yes, remove'), //remove a group or a space
        createNewItem: () => cy.get('[data-testid="tooltip-container-id"] > .box--padding-x-s3'), // + button
        confirmDelButton: () => cy.get('[data-testid="modal-footer"] > .button--danger'), // delete button for a group,space,zone
        deleteBtnSettings: () => cy.get(':nth-child(2) > .box--padding-x-s6'),
        saveButton: () => cy.get('[data-testid="modal-footer"] > .button--primary'), // save button when creating a new space,group, zone
        editButton: () => cy.contains('button', 'Edit')
    }
    getRandomText(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    //  checkAndToggleStatus() {
    //     // Selector for the status element as Inactive
    //     const statusSelector = '.typography.typography--body1.typography--red-600';
      
    //     // Selector for the toggle button 
    //     const toggleButtonSelector = ':nth-child(4) > :nth-child(2) > .switch' // Replace with the actual selector    
      
    //     // Check the status text
    //     cy.get(statusSelector).then($status => {
    //       if ($status.text().trim() === 'Inactive') {
    //         // If the status is "Inactive", press the toggle button
    //         cy.get(toggleButtonSelector, { multiple: true }).click()
    //         cy.get('box box--padding-x-s8 button button--md button--primary').click()
    //       }
    //       else if ($status.text().trim() === 'Active') {
    //         // If the status is "Active", press the toggle button
    //         cy.get(toggleButtonSelector, { multiple: true }).click()
    //         cy.get('.typography.typography--body1.typography--red-600').should('have.text', 'Active')
    //       }

    //     })

     clickMenuButton(NameButton) {
         this.basePageElements.MenuButton().contains(NameButton).click()
     }

     clickTabButton(searchTab){
        cy.wait(2000)
         this.basePageElements.TabButton().contains(searchTab).click()
     }

     clickSelectAll(){
         this.basePageElements.selectAll().click()
     }

     updateSuccess(){
        cy.wait(2000)
        this.basePageElements.updateWithSuccess().should('have.text', 'Updated successfully')
        
    }

    clickAssignButton(assign){
        this.basePageElements.assignButton().contains(assign).click()
    }

    clickRemove() {
        this.basePageElements.removeButton().should('be.visible').click({ force: true })
    }

    createNew(){
        this.basePageElements.createNewItem().click()
    }

    confirmDeleteButton(){

        //cy.get('[data-testid="modal-footer"] > .button--danger').click()
        this.basePageElements.confirmDelButton().click()
    }

    deleteFromSettingsButton(){

        //cy.get(':nth-child(2) > .box--padding-x-s6').click()
        this.basePageElements.deleteBtnSettings().click()
    }

    clickSave(){
        this.basePageElements.saveButton().click()
    }

    clickEditBtn() {
        this.basePageElements.editButton().click()
    }
    
    
    
 
}

