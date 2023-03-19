import { mainPageObj } from "../../pages/mainPage";
import { registerPage } from "../../pages/registerPage";
import { loginPage } from "../../pages/loginPage";
import { email, pass, emailToRegister, passToRegister, cookie} from "../../data/constants/loginData";

describe("Onliner Register and Login", () => {
    beforeEach(() => {
        cy.visit('/');
    })
    it("Account registration", () => {
        mainPageObj.openLoginPage();        
        loginPage.openRegisterForm();
        registerPage.enterEmail(emailToRegister);
        registerPage.checkAgreementCheckbox();
        registerPage.clickRegisterButton();
        registerPage.checkPasswordFieldIsRed();
        registerPage.checkConfirmPasswordFieldIsRed();
        registerPage.checkPasswordFieldErrorMessageIsDisplayed();    
        registerPage.enterPassword(passToRegister);
        registerPage.enterConfirmPassword(passToRegister);
        registerPage.clickRegisterButton();
        registerPage.checkPasswordFieldStrongMessageIsDisplayed();
        registerPage.checkConfirmEmailButtonIsDisplayed();        
    })
    it("Login", () => {
        mainPageObj.openLoginPage();
        loginPage.logIn(email, pass);
        loginPage.verifyCaptchaDisplayed();
    })
})