import { loginPage } from "../../pages/loginPage";
import { email, pass, emailToRegister, passToRegister, cookie} from "../../data/constants/loginData";
import { mainPageObj } from "../../pages/mainPage";
import { productPageObj } from "../../pages/productPage";
import { basketPageObj } from "../../pages/basketPage";
import { offersPageObj } from "../../pages/offersPage";
import { defaultSearchProduct } from "../../data/constants/productsData";
import { searchPopup } from "../../pages/popups/searchPopup";
import { orderPageObj } from "../../pages/orderPage";
import { defaultFirstName, defaultFlat, defaultHouse, defaultLastName, defaultStreet,defaultPhone } from "../../data/constants/userOrderData";

describe("Onliner Buy Product", () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it("Buy product test", () => {
        loginPage.logInbyCookie(cookie);
        cy.reload();
        mainPageObj.setSearchTerm(defaultSearchProduct); //использую поле поиска на главной странице, чтобы открыть попап для поиска, с главной не всегда успевает отработать ввод всех символов
        searchPopup.clearSeachResults(); //чистим поле ввода, чтобы ввести нужный продукт
        searchPopup.setSearchTerm(defaultSearchProduct);
        searchPopup.openProductDetails();
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
        basketPageObj.goToOrder();
        orderPageObj.enterStreet(defaultStreet);
        //orderPageObj.selectStreet(1);
        orderPageObj.enterHouse(defaultHouse);
        orderPageObj.enterFlat(defaultFlat);
        orderPageObj.enterFirstName(defaultFirstName);
        orderPageObj.enterLastName(defaultLastName);
        orderPageObj.enterPhone(defaultPhone);
        orderPageObj.goToPayment();
    })
})