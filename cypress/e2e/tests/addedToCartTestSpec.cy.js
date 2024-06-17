// import { afterEach, beforeEach } from "mocha";
import { registerPage } from "../../Pages/registerPage";

describe("2nd test case describe area",()=>{

    beforeEach(() => {
        cy.Login("Llewellyn87@yahoo.com","uJhUCgCK5rngwzk")
    });

    afterEach(() => {
        cy.Logout();
    });
 
    
    it('should perform some action after login', () => {
        // Your test code here
        // The user will be logged in at this point
        cy.visit(
            "https://naveenautomationlabs.com/opencart/index.php?route=common/home"
          );
        
        cy.url().should('include', 'index.php?route=common/home');
    });

})