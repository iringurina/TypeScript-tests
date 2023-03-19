import { mainPageObj } from "../../pages/mainPage";
import { searchPopup } from "../../pages/popups/searchPopup";
import { productPageObj } from "../../pages/productPage";
import { defaultSearchCategory, defaultSearchProduct } from "../../data/constants/productsData";

describe("Onliner Search", () => {
    beforeEach(() => {
        cy.visit('/');
    })
    it("Search test", () => {
        mainPageObj.setSearchTerm(defaultSearchCategory);
        searchPopup.validateSeachResultsForCategory();
        searchPopup.clearSeachResults(); //как проверить, что результаты поиска не отображаются? на что завязаться?
        searchPopup.setSearchTerm(defaultSearchProduct);
        searchPopup.validateSeachResultsForProduct();
        searchPopup.getProductTitle().then(productTitleText => {
            searchPopup.openProductDetails();
                productPageObj.compareProductTitleWithSearchResultsProductTitle(productTitleText.replace(/&nbsp;/g, ' ').trim())});      
    })
})    