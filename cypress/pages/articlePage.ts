class ArticlePage {
    // Локаторы

    private firstArticleLocator = "//div[@id='widget-1-3']";
    private smileIconLocator = "//div[@class = 'st-btn st-first'][@data-reaction = 'slight_smile']";
    private smileIconVotesCountLocator = "//*[@id='st-1']/div[1]/span[1]";
    private smileClickedIconLocator = "//div[@class = 'st-btn st-first st-selected'][@data-reaction = 'slight_smile']";
    private iconsContainerSateReactedLocator = "//div[contains(@class,'st-reacted')]";
    
    // Веб-элементы (приватные)

    private get firstArticle() {
        return cy.xpath(this.firstArticleLocator);
    }
    private get smileIcon() {
        return cy.xpath(this.smileIconLocator);
    }
    private get smileIconVotesCount() {
        return cy.xpath(this.smileIconVotesCountLocator);
    }
    private get smileClickedIcon() {
        return cy.xpath(this.smileClickedIconLocator);
    }
    private get iconsContainerStateReacted() {
        return cy.xpath(this.iconsContainerSateReactedLocator);
    }

    // Методы взаимодействия с ними

    openFirstArticle() {
        this.firstArticle.click();
    }
    clickOnSmileIcon() {
        this.smileIcon.click();
    }
    getVotesCount() {
        return this.smileIconVotesCount.invoke('text');
    }
    clickAgainOnSmileIcon() {
        this.smileClickedIcon.click();
    }
    checkIfIconIsClicked() {
        this.iconsContainerStateReacted.should('be.visible');
    }
}

export const articlePageObj = new ArticlePage();