
import { loginPage } from "../../pages/loginPage";
import { email, pass, emailToRegister, passToRegister, cookie} from "../../data/constants/loginData";
import { registerPage } from "../../pages/registerPage";
import { mainPageObj } from "../../pages/mainPage";
import { articlePageObj } from "../../pages/articlePage";
import { searchPopup } from "../../pages/popups/searchPopup";
import { defaultSearchCategory, defaultSearchProduct } from "../../data/constants/productsData";
import { productPageObj } from "../../pages/productPage";
import { basketPageObj } from "../../pages/basketPage";
import { offersPageObj } from "../../pages/offersPage";

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

    // it("Search test", () => {
    //     mainPageObj.setSearchTerm(defaultSearchCategory);
    //     searchPopup.validateSeachResultsForCategory();
    //     searchPopup.clearSeachResults(); //как проверить, что результаты поиска не отображаются? на что завязаться?
    //     searchPopup.setSearchTerm(defaultSearchProduct);
    //     searchPopup.validateSeachResultsForProduct();
    //     //Сохраняем название продукта на попапе с поиском
    //     searchPopup.getProductTitle().then(productTitleText => {
    //         // Переходим на страницу с детялами продукта
    //         searchPopup.openProductDetails();
    //             // Сравниваем название найденного продукта
    //             productPageObj.compareProductTitleWithSearchResultsProductTitle(productTitleText.replace(/&nbsp;/g, ' ').trim())});      
    // })
    
    
    //     it("Buy product test", () => {
    //         loginPage.logInbyCookie(cookie);
    //         mainPageObj.openFeaturedProduct();
    //         productPageObj.viewOffers();
    //         offersPageObj.setSortOption();
    //         offersPageObj.addToBasket();
    //         offersPageObj.closeSidebar();
    //         offersPageObj.openProductDetails();
    //         //productPageObj.compareBasketButtonItemAddedText('В корзине'); //не работает
    //          //Сохраняем название продукта
    //         productPageObj.getProductTitle().then(productTitleText => {
    //         // Сохраняем цену продукта
    //         productPageObj.getProductPrice().then(productPriceText => {
    //             // Переходим в корзину
    //             mainPageObj.openBasket();
    //             // Сравниваем название добавленного продукта
    //             basketPageObj.compareAddedProductTitle(productTitleText.replace(/&nbsp;/g, ' ').trim()); 
    //             // Сравниваем цену добавленного продукта
    //             basketPageObj.compareAddedProductPrice(productPriceText.replace(/&nbsp;/g, ' ').trim());
    //         })
            
    //     })

    // })
})