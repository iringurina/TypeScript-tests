class BasketPage {
    //Локаторы

    private addedProductTitleLocator = '//div[@class = "cart-form__description cart-form__description_primary cart-form__description_base-alter cart-form__description_font-weight_semibold cart-form__description_condensed-other"]';
    private addedProductPriceLocator = '//div[@class = "cart-form__description cart-form__description_primary cart-form__description_base-alter cart-form__description_font-weight_semibold cart-form__description_ellipsis cart-form__description_condensed-another"]';
        
    //Веб-элементы

    private get AddedProductTitle() {
        return cy.xpath(this.addedProductTitleLocator);  
    }
    private get AddedProductPrice() {
        return cy.xpath(this.addedProductPriceLocator);  
    }
    
    //Методы для взаимодействия с ними

    compareAddedProductTitle(expectedText: string): void {
        this.AddedProductTitle.should('contain.text', expectedText);
    }
    compareAddedProductPrice(expectedText: string): void {
        this.AddedProductPrice.should('contain.text', expectedText);
    }
}
    
export const basketPageObj = new BasketPage();