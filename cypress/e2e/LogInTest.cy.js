/// <reference types="cypress" />

//Initialising pages
const basePage = require ('../pages/BasePage')
const homePage = require ('../pages/HomePage')
const loginPage = require ('../pages/LoginPage')
const testData = require ('../fixtures/loginTestData.json')

//Importing selector pages
import logInSelector from '../selector/logIn.sel'
import homePageSelector from '../selector/homePage.sel'

//Login to AiSync app with invalid and valid credentials
describe('LogIn to AiSync application tests and Log Out', () => {

  // Before each class will run before each test cases
  beforeEach ( () => {
    homePage.openAiSyncPlatform(testData.baseURL)
  })

  //Test Cases

  //Invalid Login and verify error message
  it.skip('Log in with invalid details', () => {
     loginPage.enterUserName(logInSelector.email, testData.invalidEmail)
     loginPage.enterPassword(logInSelector.password, testData.invalidPassword)
     loginPage.clickLoginButton(logInSelector.logInButton)
     basePage.verifyErrorMsg(testData.message)  
  })

  //Valid login and verify Ai Build image
  it('Log in with valid details', () => {    
    loginPage.enterUserName(logInSelector.email, testData.validEmail)
    cy.wait(3000)
    loginPage.enterPassword(logInSelector.password, testData.validPassword)
    cy.wait(3000)
    loginPage.clickLoginButton(logInSelector.logInButton)
    cy.wait(3000)
    homePage.verifyAiBuildIcon(homePageSelector.aiBuildIcon)
 })

 //Log out and verify the Ai Build image on LogIn page
 it('Log out from AiSync application', () => {
   loginPage.enterUserName(logInSelector.email, testData.validEmail)
   cy.wait(3000)
   loginPage.enterPassword(logInSelector.password, testData.validPassword)
   cy.wait(3000)
   loginPage.clickLoginButton(logInSelector.logInButton)
   cy.wait(3000)
   homePage.clickSettingIcon(homePageSelector.setting)
   cy.wait(3000)
   homePage.clickLogOutButton(homePageSelector.logOutButton)
   cy.wait(3000)
   loginPage.verifyAiBuildIcon(logInSelector.aiBuildIcon)
 })

})
