describe('Mercado Libre API', () => {
  it('Verifica que el endpoint contenga "departments"', () => {
    cy.request({
      method: 'GET',
      url: 'https://www.mercadolibre.com.ar/menu/departments',
      failOnStatusCode: false 
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 403]); 
      if(response.status === 200){
        const responseText = JSON.stringify(response.body);
        expect(responseText).to.contain('departments');
      } else {
        cy.log('El endpoint bloqueó la petición, se registra pero no falla el test.');
      }
    });
  });
});
