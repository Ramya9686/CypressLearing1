describe('Add job title', () => {

    const jobTitle = 'automation tester'
    const jobDescription = 'automating regression testcases'
    const jobNote = 'must work from office for 5 days'
    it('add job title', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.get('.oxd-main-menu-item').contains('Dashboard').should('be.visible')
        cy.contains('Admin').click()
        cy.get('.oxd-topbar-body-nav-tab-item').contains('Job ').click()
        cy.get('.oxd-dropdown-menu').contains('Job Titles').click()
        cy.contains(' Add ').click()
        cy.get('.oxd-form-row input.oxd-input.oxd-input--active').type(jobTitle)
        cy.get('textarea[placeholder="Type description here"]').type(jobDescription)
        cy.get('input[type="file"]').selectFile('cypress/fixtures/addJobtitle/timesheet.png', { force: true })
        cy.get('textarea[placeholder="Add note"]').type(jobNote)
        cy.get('button[type="submit"]').click()
        cy.contains('.oxd-table-card', jobTitle).should('be.visible')
        })                                                                                                                                                                                                                               
      
    })
