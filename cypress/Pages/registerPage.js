export class registerPage{
    constructor(){
        this.titleLogo = "div#logo > a >img";
        this.myAccountButton = "//a[@title='My Account']";
        this.regesterbutton = "//a[text()='Register']";
        this.firstName = "input[name='firstname']";
        this.lastName = "input[name='lastname']";
        this.telePhone = "input[name='telephone']";
        this.email = "input[name='email']";
        this.password = "input[id='input-password']";
        this.confirmPassword = "input[id='input-confirm']";
        this.privacyPolicyCheckbox = "input[name='agree']";
        this.continueButton = "input[Value='Continue']";
    }

    clickOnMyAccountButton(){
        cy.xpath(this.myAccountButton).click();
    }
    clickOnRegesterbutton(){
        cy.xpath(this.regesterbutton).click();
    }

    enterFirstName(Fname){
        cy.get(this.firstName).type(Fname);
    }
    enterLastname(Lname){
        cy.get(this.lastName).type(Lname);
    }
    enterTelePhone(phNumber){
        cy.get(this.telePhone).type(phNumber);
    }
    enterEmail(email){
        cy.get(this.email).type(email);
    }
    enterPassword(password){
        cy.get(this.password).type(password);
    }
    enterConfirmPassword(password){
        cy.get(this.confirmPassword).type(password);
    }
    clickOnContinueButton(){
        cy.get(this.continueButton).click();
    }
    checkPrivacyPolicy() {
        cy.get(this.privacyPolicyCheckbox).check();
    }

    
}