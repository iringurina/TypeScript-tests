class OffersPage {
    //Локаторы

    private sortDropdownLocator = '//select[@class = "input-style__real"]';
    private basketButtonLocator = '//div[@class = "offers-list__item"][1]//div[@class = "offers-list__part offers-list__part_action"]//a[@class = "button-style button-style_base-alter offers-list__button offers-list__button_cart button-style_expletive"]';
    private basketButtonItemAddedLocator = '//a[contains(@class,"offers-list__button offers-list__button_cart")][contains(text(),"В корзине")]';
    private productIconLocator = '//a[@class = "offers-description__preview js-description-preview-link"]';
    
    //Веб-элементы

    private get sortDropdown() {
        return cy.xpath(this.sortDropdownLocator);  
    }
    private get basketButton() {
        return cy.xpath(this.basketButtonLocator);  
    }
    private get basketButtonItemAdded() {
        return cy.xpath(this.basketButtonItemAddedLocator);  
   }
    private get productIcon() {
        return cy.xpath(this.productIconLocator);  
   }
    
    //Методы для взаимодействия с ними

    setSortOption() {
        this.sortDropdown.select("price:asc");
    }
    addToBasket() {
        this.basketButton.click({force: true});
    }
    validateBasketButtonItemAddedIsDisplayed() {
        this.basketButtonItemAdded.should('be.visible');
    }
    openProductDetails() {
        this.productIcon.click({force: true});
    }
}
    
export const offersPageObj = new OffersPage();