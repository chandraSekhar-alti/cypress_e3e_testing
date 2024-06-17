// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('cypress-xpath')

Cypress.Commands.add('Custom command', ()=>{
    console.log('Execute custom command')
})

Cypress.Commands.add('Login',(Email,password)=>{
    cy.log("Running Login Function ");
    cy.visit(
        "https://naveenautomationlabs.com/opencart/index.php?route=common/home"
      );
    cy.get('.list-inline > .dropdown > .dropdown-toggle').click();
    cy.get("ul[class='dropdown-menu dropdown-menu-right'] > li > a").eq(1).click();
    cy.get("input#input-email").type(Email);
    cy.get("input[name='password']").type(password);
    cy.get("input[value='Login']").click();
    cy.url().should('contain','https://naveenautomationlabs.com/opencart/index.php?route=account/account')
    cy.get("div#logo > a >img").click();
    cy.log("Account Logged in successfully !")

})

Cypress.Commands.add('Logout',()=>{
    cy.get("div#logo > a >img").click();
    cy.get('.list-inline > .dropdown > .dropdown-toggle').click();
    cy.get("ul[class='dropdown-menu dropdown-menu-right'] > li > a").eq(4).click();
    cy.log("Account Logged out successfully !")
})