describe('Teste de login', () => {
  it('Login com sucesso', () => {
    cy.loginCerto('sasuke@gmail.com','12345')
  })



  it('Login com falha', () => {
        cy.loginErrado('sasuke@gmail.com','123467')
  })
})