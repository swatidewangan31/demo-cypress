/// <reference types="cypress" />

//Importing selector pages
import logInSelector from '../selector/logIn.sel'

//Initialising pages
const basePage = require ('../pages/BasePage')
const loginPage = require ('../pages/LoginPage')
const homePage = require ('../pages/HomePage')
const testData = require ('../fixtures/loginTestData.json')
const baseTestData = require ('../fixtures/baseTestData.json')

//Sort the projects
describe('Sort the projects by names and also by recent and oldest', () => {

    //This will run before each test case
    beforeEach(() => {
        homePage.openAiSyncPlatform(testData.baseURL)
        loginPage.enterUserName(logInSelector.email, testData.validEmail)
        loginPage.enterPassword(logInSelector.password, testData.validPassword)
        loginPage.clickLoginButton(logInSelector.logInButton)
    })

    //Sort the projects
    it('Sort the projects by order like ascending and descending, oldest and recent', () => {
        basePage.clickOnSortDropdown(baseTestData.recentOrder)
        //Sort by Name (A-Z)
        basePage.clickOnSortDropdown(baseTestData.ascendingOrder)
        basePage.verifySortedText(baseTestData.ascendingOrder, baseTestData.ascendingOrder)
        //Sort by Name (Z-A)
        basePage.clickOnSortDropdown(baseTestData.ascendingOrder)
        basePage.clickOnSortDropdown(baseTestData.descendingOrder)
        basePage.verifySortedText(baseTestData.descendingOrder, baseTestData.descendingOrder)
         //Sort by Oldest
         basePage.clickOnSortDropdown(baseTestData.descendingOrder)
         basePage.clickOnSortDropdown(baseTestData.oldestOrder)
         basePage.verifySortedText(baseTestData.oldestOrder, baseTestData.oldestOrder)
         //Sort by Most Recent
         basePage.clickOnSortDropdown(baseTestData.oldestOrder)
         basePage.clickOnSortDropdown(baseTestData.recentOrder)
         basePage.verifySortedText(baseTestData.recentOrder, baseTestData.recentOrder)      
    })
})