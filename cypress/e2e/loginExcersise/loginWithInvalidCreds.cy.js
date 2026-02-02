import loginExcercisePo from "../../pageObjectModel/loginExcercise.po";

describe('Test Case 3: Login User with incorrect email and password', () => {
    it('Test Case 3: Login User with incorrect email and password', () => {
        cy.visit('http://automationexercise.com')
        
        loginExcercisePo.verfiyHomePageLogo();
        loginExcercisePo.clickOnSignUpLogin();
        loginExcercisePo.loginPage("ramyagowdamb469@gmail.com", "Hetveer@123");
        loginExcercisePo.verifyLoginErrorMessage();
        

    })


})