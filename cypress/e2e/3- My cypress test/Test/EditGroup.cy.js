/// <reference types="cypress" />
import { loginPage } from "../Page/LoginPage";
import  userdata  from "../../../fixtures/example.json";
import { GroupPage } from "../Page/GroupPage";
import { SearchPage } from "../Page/SearchPage";
import { SpacePage } from "../Page/SpacePage";

const mylogin = new loginPage();
const mygroup = new GroupPage();
const myspace = new SpacePage();
//const toggle = mygroup.checkAndToggleStatus();



describe('Edit Group for Paack' , () => {

    let searchGroup = 'test123';

    // it('Should edit color of a group' , () =>{

    //     mylogin.goToHomepage('https://wms.staging.paack.app')        //go to Login page
    //     mylogin.fillfields(userdata.user, userdata.pass)             // insert user and pass
    //     mygroup.goToGroup()                                         //  go to group tab
    //     mygroup.clickTabButton('Settings')                          //  go to group tab
    //     mygroup.changeColorinGroup()                                // click change color
    //     mylogin.clickSave()                                         // click save
    //     mylogin.updateMessage()                                     // verify update message

    // })

    // it ('Activate and deactivate a group ' , () => {
        
    //     mylogin.goToHomepage('https://wms.staging.paack.app')        //go to Login page
    //     mylogin.fillfields(userdata.user, userdata.pass)             // insert user and pass
    //     mygroup.goToGroup()                                  //  go to group tab
    //     mygroup.goToGroupSearchFiled(searchGroup)                  //search for group with name 'test123'
    //     mygroup.clickTabButton('Settings')                         // click settings
    //     mygroup.toggleButton()                                    //click toggle button
    //     mygroup.confirmDeactivation()                           //conform deactivation
    //     mygroup.updateSuccess()                                   //validation that Update sucess exist
    // })

    // it('Should add a space into a group' , () => {


    //     mylogin.goToHomepage('https://wms.staging.paack.app')        //go to Login page
    //     mylogin.fillfields(userdata.user, userdata.pass)             // insert user and passmysearch.goToSearch()                                     //  go to search tab
    //     mygroup.goToGroup()                                         //  go to group tab
    //     mygroup.goToGroupSearchFiled(searchGroup)                   //search for group with name 'test123'
    //     mygroup.clickTabButton('Spaces/Pallets')                    //click SpacePallets tab
    //     mygroup.clickAddSpaceBtn()                                 //click add space
    //     mygroup.clickSelectAll()                                   //click select all
    //     myspace.clickAssignButton()                                //click assign button
    //     mygroup.updateSuccess()                                  //validation that Update sucess exist
    // })

    it('Should remove all the groups from the space', () => {
        
        mylogin.goToHomepage('https://wms.staging.paack.app')        //go to Login page
        mylogin.fillfields(userdata.user, userdata.pass)             // insert user and pass
        mygroup.goToGroup()                                         //  go to group tab
        mygroup.goToGroupSearchFiled(searchGroup)              // search for package with name 'test'
        mygroup.clickTabButton('Spaces/Pallets')                  //click SpacePallets tab  
        mygroup.clickSelectAll()                                  //click select all
        mygroup.removeSpace()                                   //click remove button
        mygroup.clickRemove()                                  //confirm remove
        mygroup.updateSuccess()                              //validation that Update sucess exist
})


})