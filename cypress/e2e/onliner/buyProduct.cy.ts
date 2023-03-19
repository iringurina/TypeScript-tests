import { loginPage } from "../../pages/loginPage";
import { email, pass, emailToRegister, passToRegister, cookie} from "../../data/constants/loginData";
import { mainPageObj } from "../../pages/mainPage";
import { productPageObj } from "../../pages/productPage";
import { basketPageObj } from "../../pages/basketPage";
import { offersPageObj } from "../../pages/offersPage";

describe("Onliner Buy Product", () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it("Buy product test", () => {
        loginPage.logInbyCookie(cookie);
        mainPageObj.openFeaturedProduct();
        productPageObj.viewOffers();
        offersPageObj.setSortOption();
        offersPageObj.addToBasket();
        offersPageObj.validateBasketButtonItemAddedIsDisplayed();
        offersPageObj.openProductDetails();
        productPageObj.getProductTitle().then(productTitleText => {
            productPageObj.getProductPrice().then(productPriceText => {
                mainPageObj.openBasket();
                    basketPageObj.compareAddedProductTitle(productTitleText.replace(/&nbsp;/g, ' ').trim()); 
                    basketPageObj.compareAddedProductPrice(productPriceText.replace(/&nbsp;/g, ' ').trim());
            })   
        })
    })
})