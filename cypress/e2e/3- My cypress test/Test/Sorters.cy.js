import { loginPage } from "../Page/LoginPage";
import  userdata  from "../../../fixtures/example.json";
import { SorterPage } from "../Page/SorterPage";

const mylogin = new loginPage();
const mysorter = new SorterPage();

describe ('Sorters' , () => {

    it('Should select a sorter and select/deselct all' , () => {
        mylogin.goToHomepage('https://wms.staging.paack.app')        //go to Login page
        mylogin.fillfields(userdata.user, userdata.pass)             // insert user and pass
        mysorter.goToSorter()
        mysorter.clickSelectAll()                                    //select all
        //mysorter.updateSuccess()
        mysorter.clickTabButton('Abnormals')
        mysorter.clickSelectAll()
        //mysorter.updateSuccess()
    })

})