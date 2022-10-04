describe('Error pages', () => {
	it('404 error + navigate back to login page on button click', () => {
	  cy.visit('/404', {
	    failOnStatusCode: false,
	  });
	  cy.contains('That’s an error.')
	  cy.url().should('include', '404');
	});
});
