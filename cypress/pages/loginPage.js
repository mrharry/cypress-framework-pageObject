import BasePage from './basePage.js'

export default class LoginPage extends BasePage {

    constructor() {
        super()
    }
    
    username     = "#username";
    password     = "#password";
    alertMessage = ".alert";
    submitButton = "#_submit";

    fillLoginCredentials(credType) {
        let field = cy.get(this.username);
        field.clear();
        field.type(Cypress.env(credType + 'User'));

        field = cy.get(this.password);
        field.clear();
        field.type(Cypress.env(credType + 'Password'));
        
        this.submit(this.submitButton)
    }

    getAlertMessage() {
        return cy.get(this.alertMessage)
    }

    submit(buttonId) {
        const button = cy.get(buttonId);
        button.click();
    }

}
