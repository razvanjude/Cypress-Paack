import { loginPage } from "../Page/LoginPage";
import  userdata  from "../../../fixtures/example.json";
import { AnotherWh } from "../Page/SelectAnotherWh";

const mylogin = new loginPage();
const mywh = new AnotherWh();

describe ('Select Another WH' , () => {

it('Should go to another WH' , () => {
    mylogin.goToHomepage('https://wms.staging.paack.app')        //go to Login page
    mylogin.fillfields(userdata.user, userdata.pass)             // insert user and pass
    mywh.goToAnotherWH()
    mywh.insertText('MAD')
    mywh.goToMadWh()
    mywh.clickAssign()

   })


})