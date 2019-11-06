/**
 * Created by stuart1 on 31/10/2019.
 */
import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../../pages/loginPage';
const loginPage = new LoginPage();


Given('I navigate to the Entry Central login page', () => {
    loginPage.navigate('/login');
});

When('I login with a/an {string} credential combination', (credType) => {
    loginPage.fillLoginCredentials(credType)
});

Then('I should see {string} displayed as the page title', (pageTitle) => {
    loginPage.getPageTitle().should('eq', pageTitle)
});

Then('I should see the {string} login error message', (message) => {
    loginPage.getAlertMessage().should('contain.text', message)
});
