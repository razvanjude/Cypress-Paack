/// <reference types="cypress" />
import { loginPage } from "../Page/LoginPage";
import  userdata  from "../../../fixtures/example.json";
import { SpacePage } from "../Page/SpacePage";

const mylogin = new loginPage();
const myspace = new SpacePage();

describe('Create Space for Paack' , () => {

    it('Should create a new space and delete it after', () => {


        mylogin.goToHomepage('https://wms.staging.paack.app')        //go to Login page  
        mylogin.fillfields(userdata.user, userdata.pass)            // insert user and pass
        myspace.goToSpace()                                         //  go to space tab
        myspace.createNew()                                       // click on create new space
        myspace.insertSpaceName('00_test_space')                    // fill space name
        myspace.clickSave()                                        // click save        
        // //mylogin.verifyCreate()                                     // verify create TREBUIE FACUTA ASERTIA
        myspace.clickTabButton('Settings')                              // click settings
        myspace.deleteFromSettingsButton()                           // click delete space
        myspace.confirmDeleteButton()                              // click confirm delete
        // //mylogin.verifyDelete()                                    // verify delete TREBUIE FACUTA ASERTIA
        mylogin.clickLogout()                                       // click logout
    })
})