// ***********************************************
// Custom Commands
// ***********************************************

//Generalise function to click button
Cypress.Commands.add('clickButton', (selector) => {
    cy.get(selector)
      .click();
})

//Generalise function to click using contains method
Cypress.Commands.add('clickText', (value) => {
  cy.contains(value)
    .click();
})

//Generalise function to enter or send text
Cypress.Commands.add('enterTextField', (selector, value) => {
    cy.get(selector)
      .clear()
      .type(value);
})  

//Generalise function for visibility of the selector
Cypress.Commands.add('isVisible', (selector) => {
    cy.get(selector)
      .should('be.visible')
})

//Generalise function to assert multiple matching text
Cypress.Commands.add('textContains', (value) => {
  cy.contains(value)
    .should('be.visible')
})

//Generatise function to assert matching text and verify message
Cypress.Commands.add('assertMatchingText', (value, message) => {
  cy.contains(value)
    .should('be.visible')
    .and('have.text', message)
})