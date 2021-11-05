// https://docs.cypress.io/api/introduction/api.html

describe('Character View Test', () => {
  it('should visit Mumen Rider', () => {
    cy.visit('/#/character/opm3')

    cy.get('.character__routeId .label-text__text').should('have.text', 'opm3')
    cy.get('.character__name .label-text__text').should('have.text', 'Mumen Rider')
    cy.get('.character__power .label-text__text').should('have.text', '7.500000000000001')
    cy.get('.character__image .label-image__image').should('have.attr', 'src', 'https://i.pinimg.com/originals/08/98/bb/0898bb4df29f9aa1593ec6ce1bfc2918.jpg')
  })
})
