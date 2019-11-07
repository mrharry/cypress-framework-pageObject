import BasePage from './basePage.js'

export default class LoginPage extends BasePage {

    constructor() {
        super()
    }
    
    username     = "#username";
    password     = "#password";
    alertMessage = ".alert";
    submitButton = "#_submit";
    cookieMessage = "#ccc-close";

    fillLoginCredentials(credType) {

        if (credType === "invalid") {
            let field = cy.get(this.username);
            field.clear();
            field.type('blahhhhhhhhhhhhh');

            field = cy.get(this.password);
            field.clear();
            field.type('blahhhhhhh');
            this.submit(this.submitButton)
        } else {
            let field = cy.get(this.username);
            field.clear();
            field.type(Cypress.env('validUser'));

            field = cy.get(this.password);
            field.clear();
            field.type(Cypress.env('validPassword'));
            this.submit(this.submitButton)
        }

    }

    getAlertMessage() {
        return cy.get(this.alertMessage)
    }

    submit(buttonId) {
        const button = cy.get(buttonId);
        button.click();
    }

}
