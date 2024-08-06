import { loginPage } from "../Page/LoginPage";
import  userdata  from "../../../fixtures/example.json";
import { ZonePage } from "../Page/ZonePage";

const myzone = new ZonePage();
const mylogin = new loginPage();

describe('Create Zone for Paack' , () => {


    it('Should create a new zone and delete it after', () => {

        mylogin.goToHomepage('https://wms.staging.paack.app')       //go to Login page
        mylogin.fillfields(userdata.user, userdata.pass)           // insert user and pass  
        myzone.goToZone()                                          //  go to zone tab
        myzone.createNew()                                    // click on create new zone + button
        myzone.insertZoneName('00_test_zone')                      // fill zone name
        myzone.clickSave()                                        // click save
        //mylogin.verifyCreate()                                     // verify create TREBUIE FACUTA ASERTIA
        myzone.clickTabButton('Settings')                              // click settings
        myzone.deleteFromSettingsButton()                         // click delete zone
        myzone.confirmDeleteButton()                              // click confirm delete
        //mylogin.verifyDelete()                                    // verify delete TREBUIE FACUTA ASERTIA
        mylogin.clickLogout()                                       // click logout
})


})