import logincredential from '../fixtures/loginCredentials.json'

class LoginPage {

    weblocators = {

    usernameInput : 'input[name="username"]',
    passwordInput : 'input[name="password"]' ,
    loginBtn : 'button[type="submit"]',
    dashboardPageInput: '.oxd-main-menu-item',
    invalidError : 'Invalid credentials'

    }

   // actions

   username (username) {
    cy.get(this.weblocators.usernameInput).type(username)
   }

   password (password) {
     cy.get(this.weblocators.passwordInput).type(password)
   }

   loginButton () {
    cy.get(this.weblocators.loginBtn).click()
   }

   loginWithValidCredentials ()  {
    cy.get(this.weblocators.usernameInput).type(logincredential.userName)
    cy.get(this.weblocators.passwordInput).type(logincredential.password)
    cy.get(this.weblocators.loginBtn).click()
 
   }

   verifyDashboardPage() {
    cy.get(this.weblocators.dashboardPageInput).should('be.visible')
   }

   loginWithInvalidUserName() {
    cy.get(this.weblocators.usernameInput).type(logincredential.invalidUsername)
    cy.get(this.weblocators.passwordInput).type(logincredential.password)
    cy.get(this.weblocators.loginBtn).click()
   }

   loginWithInvalidPassword() {
    cy.get(this.weblocators.usernameInput).type(logincredential.userName)
    cy.get(this.weblocators.passwordInput).type(logincredential.invalidPassword)
    cy.get(this.weblocators.loginBtn).click()
   }

   loginWithInvalidCredentials(){
    cy.get(this.weblocators.usernameInput).type(logincredential.invalidUsername)
    cy.get(this.weblocators.passwordInput).type(logincredential.invalidPassword)
    cy.get(this.weblocators.loginBtn).click()
   }

   verifyInvalidCredentialError() {
    cy.contains(this.weblocators.invalidError).should('be.visible')

   }


}
export default new LoginPage();