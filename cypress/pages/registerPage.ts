class RegisterPage {
    // Локаторы

    private emailFieldLocator = "//input[contains(@class,'auth-input')][@type = 'email']";
    private passwordFieldLocator = "//input[contains(@class,'auth-input')][@placeholder = 'Придумайте пароль']";
    private confirmPasswordFieldLocator = "//input[contains(@class,'auth-input')][@placeholder = 'Повторите пароль']";
    private passwordErrorFieldLocator = "//input[contains(@class,'auth-input_error')][@placeholder = 'Придумайте пароль']";
    private confirmPasswordErrorFieldLocator = "//input[contains(@class,'auth-input_error')][@placeholder = 'Придумайте пароль']";
    private agreementCheckboxLocator = "//input[@class = 'i-checkbox__real']";
    private registerButtonLocator = "//button[@type = 'submit']";
    private passwordFieldErrorMessageLocator = "//div[contains(@class,'auth-form__description_error')][contains(text(),'Укажите пароль')]";
    private passwordFieldStrongMessageLocator = "//div[contains(@class,'auth-form__description')][contains(text(),'Сильный пароль, 12 символов')]";
    private confirmEmailButtonLocator = "//a[contains(@class,'auth-button')][contains(text(),'Перейти в почту')]";
    
    // Веб-элементы (приватные)
    
    private get registerEmailField() {
        return cy.xpath(this.emailFieldLocator);
    }
    private get registerPasswordField() {
        return cy.xpath(this.passwordFieldLocator);
    }
    private get registerConfirmPasswordField() {
        return cy.xpath(this.confirmPasswordFieldLocator);
    }
    private get agreementCheckbox() {
        return cy.xpath(this.agreementCheckboxLocator);
    }
    private get registerButton() {
        return cy.xpath(this.registerButtonLocator);
    }
    private get registerErrorPasswordField() {
        return cy.xpath(this.passwordErrorFieldLocator);
    }
    private get registerErrorConfirmPasswordField() {
        return cy.xpath(this.confirmPasswordErrorFieldLocator);
    }
    private get passwordFieldErrorMessage() {
        return cy.xpath(this.passwordFieldErrorMessageLocator);
    }
    private get passwordFieldStrongMessage() {
        return cy.xpath(this.passwordFieldStrongMessageLocator);
    }
    private get confirmEmailButton() {
        return cy.xpath(this.confirmEmailButtonLocator);
    }

    // Методы взаимодействия с ними

    enterEmail(username: string) {
        this.registerEmailField.type(username);
    }
    enterPassword(password: string) {
        this.registerPasswordField.type(password);
    }
    enterConfirmPassword(password: string) {
        this.registerConfirmPasswordField.type(password);
    }
    checkAgreementCheckbox() {
        this.agreementCheckbox.check({force: true});
    }
    clickRegisterButton() {
        this.registerButton.click();
    }
    checkPasswordFieldIsRed() {
        this.registerErrorPasswordField.should('be.visible');
    }
    checkConfirmPasswordFieldIsRed() {
        this.registerErrorConfirmPasswordField.should('be.visible');
    }
    checkPasswordFieldErrorMessageIsDisplayed() {
        this.passwordFieldErrorMessage.should('be.visible');
    }
    checkPasswordFieldStrongMessageIsDisplayed() {
        this.passwordFieldStrongMessage.should('be.visible');
    }
    checkConfirmEmailButtonIsDisplayed() {
        this.confirmEmailButton.should('be.visible');
    }             
}

export const registerPage = new RegisterPage();
