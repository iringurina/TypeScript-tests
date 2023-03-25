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
}
    
export const orderPageObj = new OrderPage();