
import { loginPage } from "../../pages/loginPage";
import { email, pass, emailToRegister, passToRegister, cookie} from "../../data/constants/loginData";
import { registerPage } from "../../pages/registerPage";
import { mainPageObj } from "../../pages/mainPage";
import { articlePageObj } from "../../pages/articlePage";
import { searchPopup } from "../../pages/popups/searchPopup";
import { defaultSearchCategory } from "../../data/constants/productsData";

describe("Onliner Main Feature", () => {
    beforeEach(() => {
        cy.visit('/');
    })
      
    // it("Login", () => {
    //     mainPageObj.openLoginPage();
    //     loginPage.logIn(email, pass);
    //     loginPage.verifyCaptchaDisplayed();
    // })

    // it("Account registration", () => {
    //     mainPageObj.openLoginPage();        
    //     loginPage.openRegisterForm();
    //     registerPage.enterEmail(emailToRegister);
    //     registerPage.checkAgreementCheckbox();
    //     registerPage.clickRegisterButton();
    //     registerPage.checkPasswordFieldIsRed();
    //     registerPage.checkConfirmPasswordFieldIsRed();
    //     registerPage.checkPasswordFieldErrorMessageIsDisplayed();    
    //     registerPage.enterPassword(passToRegister);
    //     registerPage.enterConfirmPassword(passToRegister);
    //     registerPage.clickRegisterButton();
    //     registerPage.checkPasswordFieldStrongMessageIsDisplayed();
    //     registerPage.checkConfirmEmailButtonIsDisplayed();        
    //     })

    // it("React on auto news article", () => {
    //     loginPage.logInbyCookie(cookie);
    //     mainPageObj.openAutoNews();
    //     articlePageObj.openFirstArticle();
    //     articlePageObj.getVotesCount().then(initialVotesCount => {
    //         articlePageObj.clickOnSmileIcon();
    //         articlePageObj.getVotesCount().then(updatedVotesCount => {
    //             expect(+ updatedVotesCount).to.eq(+ initialVotesCount + 1);
    //         }
    //         )        
    //     }
    //     )
    //     articlePageObj.getVotesCount().then(initialVotesCount => {
    //         articlePageObj.clickAgainOnSmileIcon();
    //         articlePageObj.getVotesCount().then(updatedVotesCount => {
    //             expect(+ updatedVotesCount).to.eq(+ initialVotesCount);
    //         }
    //         )        
    //     }
    //     )
    //     articlePageObj.checkIfIconIsClicked();
    // })

    it("Search test", () => {
        mainPageObj.setSearchTerm(defaultSearchCategory);
        //searchPopup.validateSeachResults(defaultSearchCategory, 10);
        searchPopup.checkIfSearchCategoryIsDisplayed(); //не могу понять, почему падает этот тест
        searchPopup.clearSearchInput();
    })        
})