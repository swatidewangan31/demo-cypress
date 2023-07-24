class BasePage {
  
   //Assert that error message is displayed 
   verifyErrorMsg (errorMsg) {
    cy.textContains(errorMsg)
  }

  //Click on an item in a dropdown
    clickOnSortDropdown(value) {
      cy.clickText(value)
  }
  
  //Verify the selected option
  verifySortedText(value, message) {
      cy.assertMatchingText(value, message)
  }

} 

module.exports = new BasePage();