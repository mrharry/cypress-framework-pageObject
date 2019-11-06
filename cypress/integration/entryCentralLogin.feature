Feature: Validate the login page

  Background:
    Given I navigate to the Entry Central login page

  Scenario: When I navigate to the login page
    Then I should see "EntryCentral.com" displayed as the page title

  Scenario: When I log in with an incorrect email/password combination
    When I login with an "invalid" credential combination
    Then I should see the "Invalid credentials" login error message

  Scenario: When I log in with a valid registered email/password combination
    When I login with a "registered" credential combination
    Then I should see "Account - EntryCentral.com" displayed as the page title

