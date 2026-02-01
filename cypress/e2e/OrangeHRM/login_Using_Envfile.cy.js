
 describe('Login to orangeHRM', () => {
    it('Login to orangeHRM with valid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type(Cypress.env('username'))
        cy.get('input[name="password"]').type(Cypress.env('password'))
        cy.get('button[type="submit"]').click()
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.get('.oxd-main-menu-item').contains('Dashboard').should('be.visible')
    })
     it('Login to orangeHRM with Invalid Username', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type("ffhygfjyg")
        cy.get('input[name="password"]').type(Cypress.env('password'))
        cy.get('button[type="submit"]').click()
        cy.contains('Invalid credentials').should('be.visible')
    })
    it('Login to orangeHRM with Invalid password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type(Cypress.env('username'))
        cy.get('input[name="password"]').type("gjhgjgjhgjh")
        cy.get('button[type="submit"]').click()
        cy.contains('Invalid credentials').should('be.visible')
    })


    })