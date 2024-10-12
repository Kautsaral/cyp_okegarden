export function shouldBeVisible(selector) {
    cy.get(selector).should('be.visible');
}

export function shouldContainText(selector, value){
    cy.get(selector).should('contain.text', value)
}

export function shouldContain(selector, ...args){
    cy.get(selector).should('contain', ...args)
}

export function shouldHaveUrl(urlFragment, timeout = 15000) {
    cy.url({ timeout }).should((url) => {
        expect(url).to.include(urlFragment, `Expected URL to include ${urlFragment}, but got ${url}`);
    });
}

export function containText(value){
    cy.contains(value, {timeout: 15000}).should('exist')
}


export function shouldExist(selector){
    cy.get(selector).should('exist')
}

export function shouldNotExist(selector){
    cy.get(selector).should('not.exist')
}