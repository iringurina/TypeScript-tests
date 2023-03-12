class BasketPage {
    //Локаторы

    private addedProductTitleLocator = '//*[@id="container"]/div[2]/div/div/div/div/div[2]/div/div[4]/div/div/div[2]/div/div[2]/div[1]/a';
    private addedProductPriceLocator = '//*[@id="container"]/div[2]/div/div/div/div/div[2]/div/div[4]/div/div/div[2]/div/div[4]/div/div[3]';
        
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