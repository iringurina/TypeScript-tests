class SearchPopup {
    // Локаторы

    private searchFrameContainerLocator = "//iframe[@class='modal-iframe']";
    private searchResultsItemLocator = ".//a[@class='product__title-link']";
    private defaultSearchCategoryLocator = ".//a[@class = 'category__title'][contains(text(),'Карты памяти')]";
    private searchInputLocator = ".//input[@class = 'search__input']";
    
    // Веб-элементы (приватные)

    private get defaultSearchCategory() {
        return cy.xpath(this.defaultSearchCategoryLocator);
    }
    private get searchInput() {
        return cy.xpath(this.searchInputLocator);
    }

    // Методы взаимодействия с ними

    validateSeachResults(searchTerm: string, expectedCount: number) {
        cy.getIFrameBody(this.searchFrameContainerLocator)
            .xpath(this.searchResultsItemLocator)
            .should('have.length', expectedCount)
            .each((title) => {
                cy.wrap(title).should('contain.text', searchTerm);
            });
    }
    checkIfSearchCategoryIsDisplayed() {
        this.defaultSearchCategory.should('be.visible');
    }
    clearSearchInput() {
        this.searchInput.clear();
    }
   
}

export const searchPopup = new SearchPopup();