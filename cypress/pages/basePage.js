/**
 * Created by stuart1 on 05/11/2019.
 */
export default class BasePage {

    baseUrl       = "https://www.entrycentral.com";
    cookieMessage = "#ccc-close";
    
    navigate(path) {
        cy
            .visit(this.baseUrl + path)
            .get(this.cookieMessage)
            .click();
    }

    getPageTitle() {
        return cy.title()
    }

}
