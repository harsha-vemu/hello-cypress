describe('Vorwerk Regresstion Tests', function () {
    it('Selects Country', function () {
        cy.visit('https://www.vorwerk.com')
        cy.get('#onetrust-accept-btn-handler').click() // Accept Cookies
        cy.get('select').select('Germany').should('have.value', '1');
        cy.get('select').select('Germany'); // Select DE
        cy.get('.country-selector__button').click()
        cy.url().should('eq', 'https://www.vorwerk.com/de/de/c/home') // Land at Vorwerk DE page
    })

    it('Adds Thermomix product to Cart', function () {
        // cy.get('#onetrust-accept-btn-handler').click() // Accept Cookies
        cy.contains('Produkte').click() // Click Products menu
        cy.contains('Thermomix® TM6').click() // Select TM6®
        cy.scrollTo(0, 500) // Scroll the window 500px down
        cy.contains('In den Warenkorb').click() // Add to Vart
    })

    it('Fills advisor form & goto Checkout', function() {
        cy.get('#onetrust-accept-btn-handler').click() // Accept Cookies
        cy.contains('Accept All Cookies').click() // Accept Cookies
        cy.get('#advisorsearch-first-name').type('Hilde');
        cy.get('#advisorsearch-last-name').type('Holzer');
        cy.get('#advisorsearch-street').type('Brahmsallee');
        cy.get('#advisorsearch-house-no').type('99');
        cy.get('#advisorsearch-postal').type('20144');
        cy.get('#advisorsearch-city').type('Hamburg');
        cy.contains('Bestellung fortsetzen').click();
        cy.contains('Bestellung ohne Willkommens-Service fortsetzen').click();
    })
})