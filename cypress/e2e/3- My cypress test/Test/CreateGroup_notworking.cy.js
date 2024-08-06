/// <reference types="cypress" />
import { loginPage } from "../Page/LoginPage";
import  userdata  from "../../../fixtures/example.json";

const mylogin = new loginPage();
const mygroup = new GroupPage();

describe('Create Group for Paack' , () => {


    it('Should create a new group and delete it after', () => {
        mylogin.goToHomepage('https://wms.staging.paack.app')        //go to Login page
        mylogin.fillfields(userdata.user, userdata.pass)             // insert user and pass        
        mygroup.goToGroup()                                         //  go to group tab
        mygroup.createNew()                                       // click on create new group
        mylogin.selectXDOption()                                   // click on Cross-dock option
        mylogin.clicknextBtn()                                     // click next button

    })
})