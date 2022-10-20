/// <reference types="cypress"/>

describe('sasi',function()
{
it('fixturemon',function()
{
   cy.fixture('example.json').then((data) =>
   {
cy.log(data.email)
cy.log(data.name)
   })
})
})