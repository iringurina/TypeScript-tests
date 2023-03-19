import { mainPageObj } from "../../pages/mainPage";
import { articlePageObj } from "../../pages/articlePage";
import { loginPage } from "../../pages/loginPage";
import { email, pass, emailToRegister, passToRegister, cookie} from "../../data/constants/loginData";

describe("Onliner React on News", () => {
    beforeEach(() => {
        cy.visit('/');
    })
    it("React on auto news article", () => {
        loginPage.logInbyCookie(cookie);
        mainPageObj.openAutoNews();
        articlePageObj.openFirstArticle();
        articlePageObj.getVotesCount().then(initialVotesCount => {
            articlePageObj.clickOnSmileIcon();
            articlePageObj.getVotesCount().then(updatedVotesCount => {
                expect(+ updatedVotesCount).to.eq(+ initialVotesCount + 1);
            })        
        })
        articlePageObj.getVotesCount().then(initialVotesCount => {
            articlePageObj.clickAgainOnSmileIcon();
            articlePageObj.getVotesCount().then(updatedVotesCount => {
                expect(+ updatedVotesCount).to.eq(+ initialVotesCount);
            })        
        })
        articlePageObj.checkIfIconIsClicked();
    })
})    