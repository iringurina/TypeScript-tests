class BasketPage {
    //Локаторы

    private addedProductTitleLocator = '//div[@class = "cart-form__description cart-form__description_primary cart-form__description_base-alter cart-form__description_font-weight_semibold cart-form__description_condensed-other"]';
    private addedProductPriceLocator = '//div[@class = "cart-form__description cart-form__description_primary cart-form__description_base-alter cart-form__description_font-weight_semibold cart-form__description_ellipsis cart-form__description_condensed-another"]';
    private orderButtonLocator = '//a[@class = "button-style button-style_small cart-form__button button-style_primary"]';
        
    //Веб-элементы

    private get addedProductTitle() {
        return cy.xpath(this.addedProductTitleLocator);  
    }
    private get addedProductPrice() {
        return cy.xpath(this.addedProductPriceLocator);  
    }
    private get orderButton() {
        return cy.xpath(this.orderButtonLocator);  
    }
    
    //Методы для взаимодействия с ними

    compareAddedProductTitle(expectedText: string): void {
        this.addedProductTitle.should('contain.text', expectedText);
    }
    compareAddedProductPrice(expectedText: string): void {
        this.addedProductPrice.should('contain.text', expectedText);
    }
    goToOrder() {
        this.orderButton.click({force: true});
    }
}
    
export const basketPageObj = new BasketPage();