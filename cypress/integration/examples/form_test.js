// This passed
it('Website', () => {
    cy.visit('localhost:3000')
})

// This passed and I didn't need .should. Shortcut maybe?
it('Input Name', () => {
    cy.get('input')
    .should('have.value','Donald')
})

// This passes but you have to quickly insert the email in the input before it runs that test.
it('Input Email', () => {
    cy.get('input[type="email"]')
    .should('have.value', 'faulknordonald@gmail.com')
})

// This failed because the page being tested doesn't have a password input
it('Input Password', () => {
    cy.get('input[type="password"]')
    .should('have.value', 'home1234')
})

// This failed because the page being tested doesn't have a checkbox
it('Check checkbox', () => {
    cy.get('.checkbox [type="checkbox"]').not('[disabled]')
      .check().should('be.checked')
})

// This test failed
it('.submit() - submit a form', () => {
    cy.get('form')
      .find('.fullname')
      .find('.email')
      .find('.role')

    cy.get('form').submit()
      .next().should('contain', 'Your form has been submitted!')
  })

// This fails
it('Are inputs empty', () => {
    cy.get('.fullname').should('have.value','Donald')
    cy.get('.email').should('have.value','faulknordonald@gmail.com')
    cy.get('.role').should('have.value','Student')
})