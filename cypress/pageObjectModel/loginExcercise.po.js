class loginExcercisePage{
    weblocators={
        homePageLogo:()=> cy.get('img[alt="Website for automation practice"]'),
        clickOnSignUpLogin:()=>cy.contains(' Signup / Login'),
        newUserSignupText:()=>cy.contains('New User Signup!'), 
        nameInputField:()=>cy.get('input[placeholder="Name"]'),
        emailInputField:()=>cy.get('input[data-qa="signup-email"]'),
        signUpButton:()=>cy.get('button[data-qa="signup-button"]'),
        enterAccountInformationText:()=>cy.contains('Enter Account Information'),
        nameFieldInAccountInformation:()=>cy.get('input[id="name"]'),
        emailFieldInAccountInformation:()=>cy.get('#email'),
        passwordField:()=>cy.get('#password'),
        daysDropdown:()=>cy.get('#days'),
        monthsDropdown:()=>cy.get('#months'),   
        yearsDropdown:()=>cy.get('#years'),
        newsletterCheckbox:()=>cy.get('#newsletter'),
        firstNameField:()=>cy.get('#first_name'),
        lastNameField:()=>cy.get('#last_name'),
        companyField:()=>cy.get('#company'),
        address1Field:()=>cy.get('#address1'),
        address2Field:()=>cy.get('#address2'),
        countryDropdown:()=>cy.get('#country'),
        stateField:()=>cy.get('#state'),
        cityField:()=>cy.get('#city'),
        zipcodeField:()=>cy.get('input[data-qa="zipcode"]'),
        mobileNumberField:()=>cy.get('#mobile_number'),
        createAccountButton:()=>cy.get('button[data-qa="create-account"]'),
        accountCreatedText:()=>cy.contains('Account Created!'),
        continueButton:()=>cy.get('a[data-qa="continue-button"]'),
        loggedInAsText:(name)=>cy.get('li').contains(`Logged in as ${name}`),
        deleteAccountButton:()=>cy.contains(' Delete Account'),
        accountDeletedText:()=>cy.contains('Account Deleted!'),
        loginEmailField:()=>cy.get('input[data-qa="login-email"]'),
        loginPasswordField:()=>cy.get('input[data-qa="login-password"]'),
        loginButton:()=>cy.get('button[data-qa="login-button"]'),
        logoutButton:()=>cy.get('a[href="/logout"]'),
        loginTOAccountText:()=>cy.contains('Login to your account'),
        loginErrorMessage:()=>cy.contains('Your email or password is incorrect!'),
        
    }

    //Actions
   verfiyHomePageLogo(){
    this.weblocators.homePageLogo().should('be.visible');
   }
    clickOnSignUpLogin(){   
        this.weblocators.clickOnSignUpLogin().click();
    }
    verifyNewUserSignupText(){
        this.weblocators.newUserSignupText().should('be.visible');
    }
    enterName(name){
        this.weblocators.nameInputField().type(name);
    }
    enterEmail(email){
        this.weblocators.emailInputField().type(email);
    }
    clickOnSignUpButton(){
        this.weblocators.signUpButton().click();
    }
    verifyEnterAccountInformationText(){
        this.weblocators.enterAccountInformationText().should('be.visible');
    }
    verifyNameInAccountInformation(name){
        this.weblocators.nameFieldInAccountInformation().should('have.value', name);
    }
    verifyEmailInAccountInformation(email){
        this.weblocators.emailFieldInAccountInformation().should('have.value', email);
    }
    enterPassword(password){
        this.weblocators.passwordField().type(password);
    }
    selectDateOfBirth(day, month, year){
        this.weblocators.daysDropdown().select(day);
        this.weblocators.monthsDropdown().select(month);
        this.weblocators.yearsDropdown().select(year);
    }
    checkNewsletter(){
        this.weblocators.newsletterCheckbox().check();
    }
    enterFirstName(firstName){
        this.weblocators.firstNameField().type(firstName);          
    }
    enterLastName(lastName){
        this.weblocators.lastNameField().type(lastName);          
    }
    enterCompany(company){
        this.weblocators.companyField().type(company);          
    }   

    enterAddress1(address1){
        this.weblocators.address1Field().type(address1);          
    }
    enterAddress2(address2){
        this.weblocators.address2Field().type(address2);          
    }
    selectCountry(country){
        this.weblocators.countryDropdown().select(country);          
    }
    enterState(state){
        this.weblocators.stateField().type(state);          
    }
    enterCity(city){
        this.weblocators.cityField().type(city);          
    }
    enterZipcode(zipcode){
        this.weblocators.zipcodeField().type(zipcode);          
    }
    enterMobileNumber(mobileNumber){
        this.weblocators.mobileNumberField().type(mobileNumber);          
    }
    clickOnCreateAccountButton(){
        this.weblocators.createAccountButton().click();
    }
    verifyAccountCreatedText(){
        this.weblocators.accountCreatedText().should('be.visible');
    }
    clickOnContinueButton(){
        this.weblocators.continueButton().click();
    }
    verifyLoggedInAsText(name){
        this.weblocators.loggedInAsText(name).should('be.visible');
    }
    clickOnDeleteAccountButton(){
        this.weblocators.deleteAccountButton().click();
    }
    verifyAccountDeletedText(){
        this.weblocators.accountDeletedText().should('be.visible');
    }

    loginPage(email, password){
        this.weblocators.loginEmailField().type(email);
        this.weblocators.loginPasswordField().type(password);
        this.weblocators.loginButton().click();
    }

    clickOnLogoutButton(){
        this.weblocators.logoutButton().click();
    }

    verifyLoginToAccountText(){
        this.weblocators.loginTOAccountText().should('be.visible');
    }
    verifyLoginErrorMessage(){
        this.weblocators.loginErrorMessage().should('be.visible');
    }
    

}

export default new loginExcercisePage();