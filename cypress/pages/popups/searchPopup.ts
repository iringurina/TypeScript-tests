class SearchPopup {
    // Локаторы

    private searchFrameContainerLocator = "//iframe[@class='modal-iframe']";
    private defaultSearchCategoryLocator = ".//a[@class = 'category__title'][contains(text(),'Карты памяти')]";
    private searchInputLocator = ".//input[@class = 'search__input']";
    private defaultSearchProductLocator = ".//a[@class='product__title-link']";
          
    // Веб-элементы (приватные)

    // Методы взаимодействия с ними

    validateSeachResultsForCategory() {
        cy.getIFrameBody(this.searchFrameContainerLocator)
            .xpath(this.defaultSearchCategoryLocator)
            .should('be.visible');
    }
    clearSeachResults() {
        cy.getIFrameBody(this.searchFrameContainerLocator)
            .xpath(this.searchInputLocator).clear();
    }
    setSearchTerm(term: string) {
        cy.getIFrameBody(this.searchFrameContainerLocator)
            .xpath(this.searchInputLocator).type(term);
    }
    openProductDetails() {
        cy.getIFrameBody(this.searchFrameContainerLocator)
            .xpath(this.defaultSearchProductLocator).click();
    }  
}

export const searchPopup = new SearchPopup();