/// <reference types="cypress" />
import { loginPage } from "../Page/LoginPage";
import  userdata  from "../../../fixtures/example.json";
import { SpacePage } from "../Page/SpacePage";
import { SearchPage } from "../Page/SearchPage";

const mylogin = new loginPage();
const myspace = new SpacePage();
const mysearch = new SearchPage();
const random = mysearch.getRandomText(14);

describe('Edit Space for Paack' , () => {

// it('Should edit a space name' , () =>{


//     mylogin.goToHomepage('https://wms.staging.paack.app')        //go to Login page  
//     mylogin.fillfields(userdata.user, userdata.pass)            // insert user and pass
//     myspace.goToSpace()                                         //  go to space tab
//     myspace.createNew()                                       // click on create new space
//     myspace.insertSpaceName('00_test_space')                    // fill space name
//     myspace.clickSave()                                       //  go to space tab
//     myspace.clickTabButton('Settings')                              // click settings
//     myspace.clickEditBtn()                                     // click edit
//     myspace.insertSpaceName(random)                            // insert random text in space name
//     myspace.clickSave()                                         // click save
//     myspace.updateSuccess()
// })

// it('Should add a groups to a space' , () =>{
//         mylogin.goToHomepage('https://wms.staging.paack.app')        //go to Login page
//         mylogin.fillfields(userdata.user, userdata.pass)             // insert user and pass
//         mysearch.goToSearch()                                     //  go to search tab
//         mysearch.goToSpaceTab()                                        //  go to space tab
//         mysearch.insertTextinSearchField()            // search for package with name 'test'
//         mysearch.clickSearchButton()                                // click search button
//         mysearch.clickEditButton()                               //click edit button should exist  
//         mysearch.goToGroupTab()                                 //  go to group tab
//         myspace.clickAddGroup()                                //click add group
//         myspace.clickSelectAll()                                //click select all
//         myspace.clickAssignButton()                                //click assign button
//         myspace.updateSuccess()                              //validation that Update sucess exist
// })

// it('Should remove all the groups from the space', () => {
    
//         mylogin.goToHomepage('https://wms.staging.paack.app')        //go to Login page
//         mylogin.fillfields(userdata.user, userdata.pass)             // insert user and pass
//         mysearch.goToSearch()                                     //  go to search tab
//         mysearch.goToSpaceTab()                                        //  go to space tab
//         mysearch.insertTextinSearchField('test')            // search for package with name 'test'
//         mysearch.clickSearchButton()                                // click search button
//         mysearch.clickEditButton()                               //click edit button should exist  
//         mysearch.goToGroupTab()                                 //  go to group tab
//         myspace.clickSelectAll()                                //click select all
//         myspace.removeGroup()                                   //click remove button
//         myspace.clickRmvGroup()                       //confirm remove
//         myspace.updateSuccess()                              //validation that Update sucess exist
// })

})