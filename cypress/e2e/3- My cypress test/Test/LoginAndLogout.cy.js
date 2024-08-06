import { loginPage } from "../Page/LoginPage";
import  userdata  from "../../../fixtures/example.json";

const mylogin = new loginPage();

describe('Login and Logout for Paack' , () => {

    it('Should login', () => {
        mylogin.goToHomepage('https://wms.staging.paack.app/login')
        mylogin.fillfields(userdata.user, userdata.pass)
        mylogin.clickLogin()
        mylogin.verifyLogin()
    })
})