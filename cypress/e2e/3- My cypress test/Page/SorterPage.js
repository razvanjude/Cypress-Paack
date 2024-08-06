import { BasePage } from "../Base Page/basePage"

export class SorterPage extends BasePage {

    sorterPageElements = {

        selectSorter: () => cy.get('data-testid="select-field-value"')

    }

    goToSorter(){
        cy.wait(2000)
        this.clickMenuButton('Sorters')
        }  

     selectSorterList() {
        cy.wait(2000)
        this.sorterPageElements.selectSorter().click()
     }    
}