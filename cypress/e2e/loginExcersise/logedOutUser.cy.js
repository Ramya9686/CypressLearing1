import loginExcercisePo from "../../pageObjectModel/loginExcercise.po";

describe('Test Case 4: Logout User', () => {
    it('Test Case 4: Logout User', () => {
        cy.visit('http://automationexercise.com')
        
        loginExcercisePo.verfiyHomePageLogo();
        loginExcercisePo.clickOnSignUpLogin();
        loginExcercisePo.verifyNewUserSignupText();
        loginExcercisePo.enterName("Hetveer");
        loginExcercisePo.enterEmail("ramyagowdamb469@gmail.com");
        loginExcercisePo.clickOnSignUpButton();
        loginExcercisePo.verifyEnterAccountInformationText();
        loginExcercisePo.verifyNameInAccountInformation("Hetveer");
        loginExcercisePo.verifyEmailInAccountInformation("ramyagowdamb469@gmail.com");
        loginExcercisePo.enterPassword("Hetveer@123");
        loginExcercisePo.selectDateOfBirth("25", "May", "1997");
        loginExcercisePo.checkNewsletter();
        loginExcercisePo.enterFirstName("Hetveer");
        loginExcercisePo.enterLastName("Gowda S");
        loginExcercisePo.enterCompany("ABC Pvt Ltd");
        loginExcercisePo.enterAddress1("123, ABC Street");
        loginExcercisePo.enterAddress2("DEF Street");
        loginExcercisePo.selectCountry("India");
        loginExcercisePo.enterState("Karnataka");
        loginExcercisePo.enterCity("Bangalore");
        loginExcercisePo.enterZipcode("560001");
        loginExcercisePo.enterMobileNumber("9999999999");
        loginExcercisePo.clickOnCreateAccountButton();
        loginExcercisePo.verifyAccountCreatedText();
        loginExcercisePo.clickOnContinueButton();
        loginExcercisePo.verifyLoggedInAsText("Hetveer");
        loginExcercisePo.clickOnLogoutButton();
        loginExcercisePo.verifyLoginToAccountText();
        loginExcercisePo.loginPage("ramyagowdamb469@gmail.com", "Hetveer@123");
        loginExcercisePo.clickOnDeleteAccountButton();
        loginExcercisePo.verifyAccountDeletedText();

    })


})