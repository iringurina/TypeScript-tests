class OffersPage {
    //Локаторы

    private sortDropdownLocator = '//select[@class = "input-style__real"]';
    private basketButtonLocator = '//div[@class = "offers-list__item"][5]//div[@class = "offers-list__part offers-list__part_action"]//a[@class = "button-style button-style_base-alter offers-list__button offers-list__button_cart button-style_expletive"]';
    //private basketButtonItemAddedLocator = '//a[contains(@class,"product-aside__button_cart button-style_primary")]';
    private closeItemAddedSidebarLocator = '//div[@class = "product-recommended__sidebar-close"]';
    private productIconLocator = '//a[@class = "offers-description__preview js-description-preview-link"]';
    
    //Веб-элементы

    private get sortDropdown() {
        return cy.xpath(this.sortDropdownLocator);  
    }
    private get basketButton() {
        return cy.xpath(this.basketButtonLocator);  
    }
//     private get basketButtonItemAdded() {
//         return cy.xpath(this.basketButtonItemAddedLocator);  
//    }
    private get closeItemAddedSidebar() {
        return cy.xpath(this.closeItemAddedSidebarLocator);  
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
    // compareBasketButtonItemAddedText(expectedText: string): void {
    //     this.basketButtonItemAdded.should('contain.text', expectedText);
    // }
    closeSidebar() {
        this.closeItemAddedSidebar.click({force: true});
    }
    openProductDetails() {
        this.productIcon.click({force: true});
    }
    // compareBasketButtonItemAddedText(expectedText: string): void {
    //     this.BasketButtonItemAddedElement.should('have.text', expectedText);
    // }
}
    
export const offersPageObj = new OffersPage();