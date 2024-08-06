import { BasePage } from "../Base Page/basePage"

export class AnotherWh extends BasePage {

    anotherWhPageElements = {
        changeWhButton: () => cy.get('.stack--justify-space-between > [data-testid="stack-linear"] > [data-testid="box"]'),
        searchFiledModal: () => cy.get('[data-testid="list-search"]'),
        clickMadWH: () => cy.get('.list > :nth-child(1)'),
        assignButton: () => cy.get('[data-testid="modal-footer"] > .button--primary')
    }

    goToAnotherWH() {
        cy.wait(2000)
        this.anotherWhPageElements.changeWhButton().click()
    }

    insertText(name) {
        this.anotherWhPageElements.searchFiledModal().type(name)
    }

    goToMadWh() {
        this.anotherWhPageElements.clickMadWH().click()
    }

    clickAssign() {
        this.anotherWhPageElements.assignButton().click()
    }


}