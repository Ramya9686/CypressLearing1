import loginPage from "../../pageObjectModel/loginPage.po"
import addJobTitle from "../../pageObjectModel/addJobTitle.po"
import { faker } from '@faker-js/faker';

describe('add job title using page object model', () => {

    const jobTitle = faker.person.fullName();
    const description = faker.person.fullName();
    const jobNote = faker.person.fullName();
    it('add job title using page object model', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginPage.loginWithValidCredentials()
        loginPage.verifyDashboardPage()
        addJobTitle.clickOnAdmin()
        addJobTitle.clickOnJobTitle()
        addJobTitle.addJobTitle(jobTitle, description, jobNote)
        addJobTitle.verifyCreatedJobTitle(jobTitle)


    })
})