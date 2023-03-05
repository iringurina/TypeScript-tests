class MainPage {
    // Локаторы

    private loginButtonLocator = "//*[contains(@class,'auth-bar__item')][text()='Вход']";
    private newsMenuItemLocator = "//a[@class = 'b-main-navigation__link']/span[contains(text(),'Новости')]";
    //private newsDropdownMenuLocator = "//div[@class = 'b-main-navigation__dropdown b-main-navigation__dropdown_visible' ]";
    private autoNewsMenuItemLocator = "//div[@class = 'b-main-navigation__dropdown-title']/a[@href = 'https://auto.onliner.by' ]";
    private searchFieldLocator = "//*[@class='fast-search__input']"; 
        
    // Веб-элементы (приватные)

    private get loginButton() {
        return cy.xpath(this.loginButtonLocator);
    }
    private get newsMenuItem() {
        return cy.xpath(this.newsMenuItemLocator);
    }
    // private get newsDropdownMenu() {
    //     return cy.xpath(this.newsDropdownMenuLocator);
    // }
    private get autoNews() {
        return cy.xpath(this.autoNewsMenuItemLocator);
    }
    private get searchField() {
        return cy.xpath(this.searchFieldLocator);
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

}

export const mainPageObj = new MainPage();
