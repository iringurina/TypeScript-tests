class LoginPage {
    // Локаторы

    private loginFieldLocator = "//input[contains(@class,'auth-input')][@type='text']";
    private passwordFieldLocator = "//input[contains(@class,'auth-input')][@type='password']";
    private loginButtonLocator = "//button[@type='submit'][contains(@class,'auth-button')]";
    private registerLinkLocator = "//a[@href = 'https://profile.onliner.by/registration']";
    
    // Веб-элементы (приватные)

    private get loginField() {
        return cy.xpath(this.loginFieldLocator);
    }
    private get passwordField() {
        return cy.xpath(this.passwordFieldLocator);
    }
    private get loginButton() {
        return cy.xpath(this.loginButtonLocator);
    }
    private get registerLink() {
        return cy.xpath(this.registerLinkLocator);
    }
    
    // Методы взаимодействия с ними

    logIn(username: string, password: string) {
        this.loginField.type(username);
        this.passwordField.type(password);
        this.loginButton.click();
    }
    verifyCaptchaDisplayed() {
        cy.get('iframe[title="reCAPTCHA"]')
            .its('0.contentDocument.body').should('not.be.empty')
            .then(cy.wrap).find(".recaptcha-checkbox").should('be.visible');
    }
    logInbyCookie(cookie: string){
        cy.setCookie('logged_in', '1', { domain: ".onliner.by", secure: true, sameSite: "lax" });
        cy.setCookie('oss', cookie, { domain: '.onliner.by', httpOnly: true, secure: true, sameSite: "lax"});
        cy.visit('/');
    }  
    openRegisterForm() {
        this.registerLink.click();
    }

}

export const loginPage = new LoginPage();