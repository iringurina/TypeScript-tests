class MainPage {
    // Локаторы

    private loginButtonLocator = "//*[contains(@class,'auth-bar__item')][text()='Вход']";
    private newsMenuItemLocator = "//a[@class = 'b-main-navigation__link']/span[contains(text(),'Новости')]";
    private autoNewsMenuItemLocator = "//div[@class = 'b-main-navigation__dropdown-title']/a[@href = 'https://auto.onliner.by' ]";
    private searchFieldLocator = "//*[@class='fast-search__input']";
    private featuredProductLocator = "//div[@class ='catalog-offers__item swiper-slide js-catalog-layer-item swiper-slide-active']";
    private basketIconLocator = "//a[@class='auth-bar__item auth-bar__item--cart']";
            
    // Веб-элементы (приватные)

    private get loginButton() {
        return cy.xpath(this.loginButtonLocator);
    }
    private get newsMenuItem() {
        return cy.xpath(this.newsMenuItemLocator);
    }
    private get autoNews() {
        return cy.xpath(this.autoNewsMenuItemLocator);
    }
    private get searchField() {
        return cy.xpath(this.searchFieldLocator);
    }
    private get featuredProduct() {
        return cy.xpath(this.featuredProductLocator);
    }
    private get basketIcon() {
        return cy.xpath(this.basketIconLocator);
    }

    // Методы взаимодействия с ними
    
    openLoginPage() {
        this.loginButton.click();
    }
    openNewsDropdownMenu() {
        this.newsMenuItem.trigger('mouseover');
    }
    openAutoNews() {
        this.autoNews.click({force: true});
    }
    setSearchTerm(term: string) {
        this.searchField.type(term);
    }
    openFeaturedProduct() {
        this.featuredProduct.click();
    }
    openBasket() {
        this.basketIcon.click({force: true});
    }
}

export const mainPageObj = new MainPage();
