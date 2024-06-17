import { registerPage } from "../../Pages/registerPage";
import { Faker, faker } from "@faker-js/faker";

describe("test Automation", () => {
  const regesterObj = new registerPage(cy, it);

  it("regester flow", () => {
    cy.visit(
      "https://naveenautomationlabs.com/opencart/index.php?route=common/home"
    );

    cy.get(regesterObj.titleLogo)
      .should("be.visible")
      .and("have.class", "img-responsive")
      .and("have.attr", "title", "naveenopencart");

    cy.xpath(regesterObj.myAccountButton).should('have.class','dropdown-toggle')
    regesterObj.clickOnMyAccountButton();
    cy.xpath(regesterObj.regesterbutton).should('have.text','Register');
    regesterObj.clickOnRegesterbutton();

    // generating fake data using faker
    let fName = faker.name.firstName();
    let lName = faker.name.lastName();
    let emailAddress = faker.internet.email();
    let phoneNumber = faker.phone.number();
    let password = faker.internet.password();
    cy.log("Fname is ---> ", fName);
    cy.log("lName is ---> ", lName);
    cy.log("emailAddress is ---> ", emailAddress);
    cy.log("phoneNumber is ---> ", phoneNumber);
    cy.log("password is ---> ", password);

    cy.get(regesterObj.firstName).should('have.class','form-control');
    regesterObj.enterFirstName(fName);
    cy.get(regesterObj.lastName).should('have.class','form-control');
    regesterObj.enterLastname(lName);

    cy.get(regesterObj.email).should('have.class','form-control');
    regesterObj.enterEmail(emailAddress);

    cy.get(regesterObj.telePhone).should('have.class','form-control');
    regesterObj.enterTelePhone(phoneNumber);
    cy.get(regesterObj.password).should('have.class','form-control');
    regesterObj.enterPassword(password);

    cy.get(regesterObj.confirmPassword).should('have.class','form-control');
    regesterObj.enterConfirmPassword(password);

    cy.get(regesterObj.privacyPolicyCheckbox).should('exist').and('be.visible').and('not.be.disabled').and('not.be.checked');
    regesterObj.checkPrivacyPolicy();
    cy.get(regesterObj.privacyPolicyCheckbox).should('be.checked');

    cy.get(regesterObj.continueButton).should('have.class','btn btn-primary')
    regesterObj.clickOnContinueButton();
  });
});
