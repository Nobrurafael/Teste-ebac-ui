/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

  beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

afterEach('', () => {
    cy.screenshot()
});
  it('Deve fazer login com sucesso', () =>{
      cy.get('#username').type('bruno.lima@teste.com.br')
      cy.get('#password').type('81548224')
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' ,'Olá, bruno.lima (não é bruno.lima? Sair)')
    
  })
  
  it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('brunolima@teste.com.br')
        cy.get('#password').type('81548224')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')

  });

  it('Deve exibir a mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('bruno.lima@teste.com.br')
        cy.get('#password').type('8154822')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail bruno.lima@teste.com.br está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
  });
})