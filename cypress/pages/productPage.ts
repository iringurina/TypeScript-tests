class ProductPage {
    //Локаторы
  
    private productTitleLocator = '//h1[@class = "catalog-masthead__title js-nav-header"]';
    private productPriceLocator = '//div[@class = "offers-description__price offers-description__price_secondary"]';
    private offersButtonLocator = '//a[@class = "button button_orange button_big offers-description__button js-product-prices-count-link"]';
        
    //Веб-элементы

    private get productTitle() {
        return cy.xpath(this.productTitleLocator);  
    }
    private get productPrice() {
        return cy.xpath(this.productPriceLocator);  
    }
    private get offersButton() {
        return cy.xpath(this.offersButtonLocator);  
    }
    
    //Методы для взаимодействия с ними

    getProductTitle() {
        return this.productTitle.invoke('text');
    }
    getProductPrice() {
        return this.productPrice.invoke('text');
    }
    viewOffers() {
        this.offersButton.click();
    }
}
    
export const productPageObj = new ProductPage();