import * as data from "../helpers/default_data.json"

describe('Покупка аватара', function () {

it ("Проверка покупки аватара", function() {
    cy.visit("https://pokemonbattle.ru/login")
    cy.wait(500)
    cy.get(':nth-child(1) > .auth__input').type(data.PokeLogin)
    cy.get('#password').type(data.PokePass)
    cy.get('.auth__button').click ()
    cy.get('.header__container > .header__id').click()
    cy.get('[href="/shop"]').click ()
    cy.get('.available > button').first().click({ force: true })
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type("4111111111111111")
    cy.get(':nth-child(1) > .pay_base-input-v2').type("12/26")
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type("125")
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type("vadim lakomov")
    cy.get('.pay-btn').click ()
    cy.get('#cardnumber').type("56456")
    cy.get('.payment__submit-button').click ()
    cy.get('.payment__font-for-success').contains("Покупка прошла успешно")
   })
})