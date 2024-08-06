/// <reference types="cypress" />
import { loginPage } from "../Page/LoginPage";
import  userdata  from "../../../fixtures/example.json";
import { SearchPage } from "../Page/SearchPage";
import { GroupPage } from "../Page/GroupPage";

const mylogin = new loginPage();
const mysearch = new SearchPage();
const mygroup = new GroupPage();
const random = mysearch.getRandomText(14);

describe('Check if Search is working for Paack' , () => {

    it('Check a package that exists' , () =>{

        mylogin.goToHomepage('https://wms.staging.paack.app')        //go to Login page
        mylogin.fillfields(userdata.user, userdata.pass)             // insert user and pass
        mysearch.goToSearch()                                     //  go to search tab
        mysearch.insertTextinSearchField('test123')                       // search for package with name 'test123'
        mysearch.clickSearchButton()                                // click search button
        mysearch.Infotext()
    })

    it('Check a package that does not exists' , () =>{

        mylogin.goToHomepage('https://wms.staging.paack.app')        //go to Login page
        mylogin.fillfields(userdata.user, userdata.pass)             // insert user and pass
        mysearch.goToSearch()                                     //  go to search tab
        mysearch.insertPkgName(random)                                // search for package with name 'test123'
        mysearch.clickSearchButton()                                // click search button
        mysearch.SearchItemNotExist()                               //asertion pkg not exist  

    })

    it ('search for a Space that exists', () => {
        mylogin.goToHomepage('https://wms.staging.paack.app')        //go to Login page
        mylogin.fillfields(userdata.user, userdata.pass)             // insert user and pass
        mysearch.goToSearch()                                     //  go to search tab
        mysearch.goToSpaceTab()                                        //  go to space tab
        mysearch.insertTextinSearchField('test')                     // search for package with name 'test'
        mysearch.clickSearchButton()                                // click search button
        mysearch.editBtnExist()                                    //edit button should exist
    })

    it('search for a Space that does not exists', () => {
        mylogin.goToHomepage('https://wms.staging.paack.app')       //go to Login page
        mylogin.fillfields(userdata.user, userdata.pass)           // insert user and pass
        mysearch.goToSearch()                                     //  go to search tab
        mysearch.goToSpaceTab()                                    //  go to space tab
        mysearch.insertPkgName(random)                             // search for package with name 'test'
        mysearch.clickSearchButton()                               // click search button
        mysearch.SearchItemNotExist()                               //asertion pkg not exist  
    })

    it('Search for a Group that exists' , () => {
        mylogin.goToHomepage('https://wms.staging.paack.app')        //go to Login page
        mylogin.fillfields(userdata.user, userdata.pass)             // insert user and pass
        mysearch.goToSearch()                                     //  go to search tab
        mysearch.goToGroupTab()                                    //  go to group tab
        mysearch.insertTextinSearchField('test')                      // search for package with name 'test'
        mysearch.clickSearchButton()                                // click search button
        mygroup.checkGroupInfo()                                  //check if Group Info text exist on the page
    })

    it('Search for a Group that does not exists' , () => {
        mylogin.goToHomepage('https://wms.staging.paack.app')        //go to Login page
        mylogin.fillfields(userdata.user, userdata.pass)            // insert user and pass
        mysearch.goToSearch()                                     //  go to search tab
        mysearch.goToGroupTab()                                   //  go to group tab
        mysearch.insertPkgName(random)                             // search for a random group
        mysearch.clickSearchButton()                               // click search button
        mysearch.SearchItemNotExist()                              //asertion group not exist  
    })

    it('Search for a Zone that does not exists' , () => {
        mylogin.goToHomepage('https://wms.staging.paack.app')        //go to Login page)
        mylogin.fillfields(userdata.user, userdata.pass)             // insert user and pass
        mysearch.goToSearch()                                       //  go to search tab
        mysearch.goToZoneTab()                                      //  go to zone tab  
        mysearch.insertPkgName(random)                              // search for a random zone
        mysearch.clickSearchButton()                                // click search button
        mysearch.SearchItemNotExist()                                 //edit button should exist 
    })

    it('Search for a Zone that exists' , () => {
        mylogin.goToHomepage('https://wms.staging.paack.app')        //go to Login page
        mylogin.fillfields(userdata.user, userdata.pass)             // insert user and pass
        mysearch.goToSearch()                                     //  go to search tab
        mysearch.goToZoneTab()                                        //  go to zone tab  
        mysearch.insertTextinSearchField('test')                   // search for a zone with name 'test'
        mysearch.clickSearchButton()                                // click search button
        mysearch.editBtnExist()                                    //edit button should exist 
    })
    
})