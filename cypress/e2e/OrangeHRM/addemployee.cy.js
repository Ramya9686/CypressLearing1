import addEmployee from "../../pageObjectModel/addEmployee .po"
import { faker, fakerAF_ZA } from '@faker-js/faker';



describe ('add new employee', () => {
    const firstname = faker.person.fullName();
    const lastname = faker.person.lastName()
    const empId = faker.number.binary()

    it('add first employee', () =>{
        cy.loginToApplication()
        addEmployee.clickOnPIM()
        addEmployee.clickOnAddEmployeeHeadder()
        addEmployee.addNewEmployee(firstname, lastname, empId)
        addEmployee.verifyNewlyAddedEmp(firstname)

    })
} )