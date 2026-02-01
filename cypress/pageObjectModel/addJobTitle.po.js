
class addJobTitle {

    weblocators =  {
        adminModule : 'Admin',
        job : '.oxd-topbar-body-nav-tab-item',
        jobMenue : 'a[role="menuitem"]',
        addBtn : ' Add ',
        jobTitle : '.oxd-form-row input.oxd-input.oxd-input--active',
        jobDescription : 'textarea[placeholder="Type description here"]',
        jobSpecificationFileUpload : 'input[type="file"]',
        jobNote : 'textarea[placeholder="Add note"]',
        jobSaveBtn : 'button[type="submit"]',
        jobTitleTable : '.oxd-table-card'
    }

    //Actions

    clickOnAdmin () {
        cy.contains(this.weblocators.adminModule).click()
    }

    clickOnJobTitle () {
        cy.get(this.weblocators.job).contains('Job ').click()
    }

    addJobTitle (jobTitle, description, note) {
        cy.get(this.weblocators.jobMenue).contains('Job Titles').click()
        cy.contains(this.weblocators.addBtn).click()
        cy.get(this.weblocators.jobTitle).type(jobTitle)
        cy.get(this.weblocators.jobDescription).type(description)
        cy.get(this.weblocators.jobSpecificationFileUpload).selectFile('cypress/fixtures/addJobtitle/timesheet.png', { force: true })
        cy.get(this.weblocators.jobNote).type(note)
        cy.get(this.weblocators.jobSaveBtn).click()

    }

    verifyCreatedJobTitle (jobtitle) {
        cy.get(this.weblocators.verifyCreatedJobTitle).contains(jobtitle).should('be.visible')

    }
}

export default new addJobTitle