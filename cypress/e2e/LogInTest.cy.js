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
    cy.clearLocalStorage()
    cy.clearCookies()
    homePage.openAiSyncPlatform('baseUrl')
  })

  //Test Cases

  //Invalid Login and verify error message
  it('Log in with invalid details', () => {
    loginPage.enterUserName(logInSelector.email, testData.invalidEmail)
    loginPage.enterPassword(logInSelector.password, testData.invalidPassword)
    loginPage.clickLoginButton(logInSelector.logInButton)
    basePage.verifyErrorMsg(testData.message) 
    cy.wait(5000) 
 })

  //Valid login and verify Ai Build image
  it('Log in with valid details', () => {   
   // homePage.openAiSyncPlatform(testData.baseURL) 
    loginPage.enterUserName(logInSelector.email, testData.validEmail)
    loginPage.enterPassword(logInSelector.password, testData.validPassword)
    loginPage.clickLoginButton(logInSelector.logInButton)
    homePage.verifyAiBuildIcon(homePageSelector.aiBuildIcon)
    cy.wait(5000)
 })

 //Log out and verify the Ai Build image on LogIn page
 it('Log out from AiSync application', () => {
  cy.wait(3000)
   loginPage.enterUserName(logInSelector.email, testData.validEmail)
   
   loginPage.enterPassword(logInSelector.password, testData.validPassword)
  
   loginPage.clickLoginButton(logInSelector.logInButton)
   
   homePage.clickSettingIcon(homePageSelector.setting)
 
   homePage.clickLogOutButton(homePageSelector.logOutButton)
   cy.wait(3000)
   loginPage.verifyAiBuildIcon(logInSelector.aiBuildIcon)
 })

})
