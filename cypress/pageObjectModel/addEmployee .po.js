class addEmployee {

    weblocators = {
        PIMModule: 'PIM',
        addEmployeeHeadder: 'Add Employee',
        firstNameInput: 'input[name="firstName"]',
        lastNameInput: 'input[name="lastName"]',
        submitBttn: 'button[type="submit"]',
        empIdInput: '.oxd-grid-2.orangehrm-full-width-grid input.oxd-input.oxd-input--active',
        employeeListHeadder: 'Employee List',
        employeeNameSearch : 'input[placeholder="Type for hints..."]',
        employeeList : '.orangehrm-container',



    }

    //Actions

    clickOnPIM() {
        cy.contains(this.weblocators.PIMModule).click()
    }

    clickOnAddEmployeeHeadder() {
        cy.contains(this.weblocators.addEmployeeHeadder).click()
    }

    addNewEmployee(firstName, lastName, empID) {
        cy.get(this.weblocators.firstNameInput).type(firstName)
        cy.get(this.weblocators.lastNameInput).type(lastName)
        cy.get(this.weblocators.empIdInput).then(($input) => {
            const value = $input.val();

            if (!value) {
                cy.wrap($input).type(empID);
            }
        });
        cy.contains(' Save ').click()

    }

    verifyNewlyAddedEmp (firstName) {
        cy.contains(this.weblocators.employeeListHeadder).click()
        cy.get(this.weblocators.employeeNameSearch).first().type(firstName)
        cy.get(this.weblocators.submitBttn).click()
        cy.get(this.weblocators.employeeList).should('be.visible')


    }
}

export default new addEmployee