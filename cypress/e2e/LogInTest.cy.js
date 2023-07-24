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
  it('Log in with invalid details', () => {
     loginPage.enterUserName(logInSelector.email, testData.invalidEmail)
     loginPage.enterPassword(logInSelector.password, testData.invalidPassword)
     loginPage.clickLoginButton(logInSelector.logInButton)
     basePage.verifyErrorMsg(testData.message)  
  })

  //Valid login and verify Ai Build image
  it('Log in with valid details', () => {
    loginPage.enterUserName(logInSelector.email, testData.validEmail)
    loginPage.enterPassword(logInSelector.password, testData.validPassword)
    loginPage.clickLoginButton(logInSelector.logInButton)
    homePage.verifyAiBuildIcon(homePageSelector.aiBuildIcon)
 })

 //Log out and verify the Ai Build image on LogIn page
 it('Log out from AiSync application', () => {
   loginPage.enterUserName(logInSelector.email, testData.validEmail)
   loginPage.enterPassword(logInSelector.password, testData.validPassword)
   loginPage.clickLoginButton(logInSelector.logInButton)
   homePage.clickSettingIcon(homePageSelector.setting)
   homePage.clickLogOutButton(homePageSelector.logOutButton)
   loginPage.verifyAiBuildIcon(logInSelector.aiBuildIcon)
 })

})