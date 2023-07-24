// This page contains the Base Url and all Home page functions

class homePage  {

    //Open AiSync platform
    openAiSyncPlatform (url) {
        cy.visit(url);
    }

    //Assert Ai Build image
    verifyAiBuildIcon (selector) {
        cy.isVisible(selector);
    }

    //Click on a Setting icon
    clickSettingIcon (selector) {
        cy.clickButton(selector)
    }

    //Log out
    clickLogOutButton (selector) {
        cy.clickButton(selector)
    }
}

module.exports = new homePage();