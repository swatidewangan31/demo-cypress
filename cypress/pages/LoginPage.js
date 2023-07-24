//This page contains functions from the Log in page

class loginPage {

//Enter an email address
enterUserName (selector, username) {
  cy.enterTextField(selector, username)
}

//Enter a password
enterPassword (selector, password) {
  cy.enterTextField(selector, password)
}

//Click Login button
clickLoginButton (selector) {
  cy.clickButton(selector)
}

//Assert Ai Build image on Log in page
verifyAiBuildIcon (selector) {
  cy.isVisible(selector)
}

}

module.exports = new loginPage();