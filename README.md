# About the project

An automation testing framework for web application using Cypress

# Project Structure

```
.
├── cypress
│   ├── fixtures
│   │   ├── loginTestData.json
│   │   └── ...
│   ├── e2e
│   │   ├── LoginTest.cy.js
│   │   └── ...
│   ├── page-objects
│   │   ├── BasePage.js
│   │   ├── HomePage.js
│   │   ├── LoginPage.js
│   │   └── ...
│   ├── selector
│   │   ├── login.sel.js
│   │   └── ...
│   └── support
│      ├── commands.js
│      ├── e2e.js
│      └── ...
├── package.json

```

# Getting Started
## Prerequisites
* NodeJS

## Installation
* Clone the repo

   git clone https://github.com/Ai-Build/ai-sync-qa.git

* Install NPM packages

   `$ npm install`

## Running the tests

* Open Cypress:

   `$ npm run cy:open`

* Running Cypress locally:

   `$ npx cypress run`
   
* Running the tests in headless mode with Chrome:

   `$ npm run cy:run-chrome`

* Running the tests in headless mode with Firefox:

   `$ npm run cy:run-firefox`
   
* Running the tests in headless mode with Electron:

   `$ npm run cy:run-electron`
