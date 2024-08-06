import { BasePage } from "../Base Page/basePage";


export class SearchPage extends BasePage {

    searchPageElements= {
    searchTab: () => cy.get('[aria-label="Search"]'),
    searchField: () => cy.get('[name="query"]'),
    searchButton: () => cy.get('[data-testid="stack-linear"] > .box--padding-x-s8'),
    PackageInfoText: () =>cy.get('.stack--full-width > :nth-child(1) > .typography--h6'),
    ItemNotExist: () => cy.get('p[data-testid="empty-state-text"]'),
    EditButton: () => cy.get('.box--padding-x-s3 > [data-testid="box"] > svg')
}

goToSearch() {
    cy.wait(3000)
    this.searchPageElements.searchTab().click()
}

insertTextinSearchField(name) {
    this.searchPageElements.searchField().type(name)
}

clickSearchButton() {
    this.searchPageElements.searchButton().click()
}

Infotext(){
    this.searchPageElements.PackageInfoText().should('exist')

}

SearchItemNotExist(){
    this.searchPageElements.ItemNotExist().should('have.text', "We haven't found matches for your search.")
}

editBtnExist(){

    this.searchPageElements.EditButton().should('exist')
}

clickEditButton(){
    this.searchPageElements.EditButton().click()
}

insertPkgName(name){
                
    this.searchPageElements.searchField().clear().type(name)
}

goToPackageTab(){
    cy.wait(2000)
    this.clickTabButton('Package')
}

goToSpaceTab(){
    cy.wait(2000)
    this.clickTabButton('Space')
} 
goToZoneTab(){
    cy.wait(2000)
    this.clickTabButton('Zone')
} 
goToGroupTab(){
    cy.wait(2000)
    this.clickTabButton('Group')
} 
    
}