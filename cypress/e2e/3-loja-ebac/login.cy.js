/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

it('Deve fazer login com sucesso', () =>{
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('bruno.lima@teste.com.br')
    cy.get('#password').type('81548224')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' ,'Olá, bruno.lima (não é bruno.lima? Sair)')
})

})