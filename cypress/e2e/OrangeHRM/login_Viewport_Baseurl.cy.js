

 describe('Login to orangeHRM', () => {

    beforeEach('viewPort', ()  => {
        cy.viewport( 1280, 720)
    })
    it.only('Login to orangeHRM with valid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type("Admin")
        cy.wait(5000)
        cy.get('input[name="password"]').type("admin123")
        cy.get('button[type="submit"]',{timeout: 5000}).click()
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.get('.oxd-main-menu-item').contains('Dashboard').should('be.visible')
    })
     it('Login to orangeHRM with Invalid Username', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type("ffhygfjyg")
        cy.get('input[name="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.contains('Invalid credentials').should('be.visible')
    })
    it('Login to orangeHRM with Invalid password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("gjhgjgjhgjh")
        cy.get('button[type="submit"]').click()
        cy.contains('Invalid credentials').should('be.visible')
    })


    })