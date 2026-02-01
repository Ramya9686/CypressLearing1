import loginPage from "../../pageObjectModel/loginPage.po";


describe ('login using page object model', () => {
    it('login using page object model with valid credentials', () => {
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     loginPage.loginWithValidCredentials()
     loginPage.verifyDashboardPage()
    
    })

     it('login using page object model with invalid usename ', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginPage.loginWithInvalidUserName()
        loginPage.verifyInvalidCredentialError()

     })

        it('login using page object model with invalid password ', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginPage.loginWithInvalidPassword()
        loginPage.verifyInvalidCredentialError()

     })

      it('login using page object model with invalid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginPage.loginWithInvalidCredentials()
        loginPage.verifyInvalidCredentialError()

     })

})