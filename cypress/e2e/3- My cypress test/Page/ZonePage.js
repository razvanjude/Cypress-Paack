import { BasePage } from "../Base Page/basePage"

export class ZonePage extends BasePage { 

    zonePageElements = {
        zoneNameField: () => cy.get('[name="zone_name"]'),

}

    goToZone(){
    cy.wait(2000)
    this.clickMenuButton('Zones')
    }

    insertZoneName(name){
    cy.wait(2000)
    this.zonePageElements.zoneNameField().type(name)
    }
}


