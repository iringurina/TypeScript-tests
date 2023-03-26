class OrderPage {
    //Локаторы
  
    private streetInputLocator = '//div[@class ="cart-form__row cart-form__row_condensed-fringe"][2]//input[contains(@class,"auth-form__input_width_full")]';
    private houseInputLocator = '//div[@class = "cart-form__group cart-form__group_narrow cart-form__group_nonadaptive"][1]//input[contains(@class,"cart-form__input_width_xxxxssss")]';
    private flatInputLocator = '//div[@class = "cart-form__group cart-form__group_narrow cart-form__group_nonadaptive"][5]//input[contains(@class,"cart-form__input_width_xxxxs")]';
    private firstNameInputLocator = '//div[@class = "cart-form__row cart-form__row_condensed-fringe"][4]//div[@class = "cart-form__group cart-form__group_narrow"][1]//input[contains(@class, "cart-form__input cart-form__input_width_ss")]';
    private lastNameInputLocator = '//div[@class = "cart-form__row cart-form__row_condensed-fringe"][4]//div[@class = "cart-form__group cart-form__group_narrow"][2]//input[contains(@class, "cart-form__input cart-form__input_width_ss")]';
    private phoneInputLocator = '//div[@class = "cart-form__row cart-form__row_condensed-fringe"][5]//input[contains(@class,"cart-form__input_width_xxsss")]';
    private paymentButtonLocator = '//button[@class = "button-style button-style_primary button-style_base cart-form__button cart-form__button_responsive"]';
    private streetDropdownLocator = '//div[@class ="cart-form__row cart-form__row_condensed-fringe"][2]//div[contains(@class,"auth-dropdown")]';
    private paymentByCardLocator = '//div[@class = "cart-form__anchor-list"]//div[@id = "anchor-item_online_card"]';
    private paymentByMinipayLocator = '//div[@class = "cart-form__anchor-list"]//div[@id = "anchor-item_by_parts"]';
    private paymentByHalvaLocator = '//div[@class = "cart-form__anchor-list"]//div[@id = "anchor-item_online_installment_card"]';
    private paymentWhenReceivedLocator = '//div[@class = "cart-form__anchor-list"]//div[@id = "anchor-item_offline"]';
    private paymentByCardIsActiveLocator = '//div[@class = "cart-form__anchor-list"]//div[@id = "anchor-item_online_card"][@class = "cart-form__anchor-item cart-form__anchor-item_shield cart-form__anchor-item_active"]';
    private confirmOrderButtonLocator = '//button[contains(@class, "cart-form__button")][contains(text(), "Перейти к подтверждению заказа")]';
        
    //Веб-элементы

    private get streetInput() {
        return cy.xpath(this.streetInputLocator);  
    }
    private get houseInput() {
        return cy.xpath(this.houseInputLocator);  
    }
    private get flatInput() {
        return cy.xpath(this.flatInputLocator);  
    }
    private get firstNameInput() {
        return cy.xpath(this.firstNameInputLocator);  
    }
    private get lastNameInput() {
        return cy.xpath(this.lastNameInputLocator);  
    }
    private get phoneInput() {
        return cy.xpath(this.phoneInputLocator);  
    }
    private get paymentButton() {
        return cy.xpath(this.paymentButtonLocator);  
    }
    private get streetDropdown() {
        return cy.xpath(this.streetDropdownLocator);  
    }
    private get paymentByCard() {
        return cy.xpath(this.paymentByCardLocator);  
    }
    private get paymentByMinipay() {
        return cy.xpath(this.paymentByMinipayLocator);  
    }
    private get paymentByHalva() {
        return cy.xpath(this.paymentByHalvaLocator);  
    }
    private get paymentWhenReceived() {
        return cy.xpath(this.paymentWhenReceivedLocator);  
    }
    private get paymentByCardIsActive() {
        return cy.xpath(this.paymentByCardIsActiveLocator);  
    }
    private get confirmOrderButton() {
        return cy.xpath(this.confirmOrderButtonLocator);  
    }
    
    //Методы для взаимодействия с ними

    enterStreet(street: string) {
        this.streetInput.type(street);
    }
    enterHouse(house: string) {
        this.houseInput.type(house);
    }
    enterFlat(flat: string) {
        this.flatInput.type(flat);
    }
    enterFirstName(firstName: string) {
        this.firstNameInput.type(firstName);
    }
    enterLastName(lastName: string) {
        this.lastNameInput.type(lastName);
    }
    enterPhone(phone: string) {
        this.phoneInput.type(phone);
    }
    goToPayment() {
        this.paymentButton.click({force: true});
    }
    selectStreet(option: number) {
        this.streetDropdown.select(option);
    }
    checkIfPaymentByCardIsDisplayed() {
        this.paymentByCard.should('be.visible');
    }
    checkIfPaymentByMinipayIsDisplayed() {
        this.paymentByMinipay.should('be.visible');
    }
    checkIfPaymentByHalvaIsDisplayed() {
        this.paymentByHalva.should('be.visible');
    }
    checkIfPaymentWhenReceivedIsDisplayed() {
        this.paymentWhenReceived.should('be.visible');
    }
    checkIfPaymentByCardIsSelected() {
        this.paymentByCardIsActive.should('be.visible');
    }
    checkIfConfirmOrderButtonIsDisplayed() {
        this.confirmOrderButton.should('be.visible');
    }    
}
    
export const orderPageObj = new OrderPage();