import {LoginPage} from "../Pages/LoginPage"
const lo=new LoginPage();

describe('All Tests',function()

{
    beforeEach(function()
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })
it('test1',function()
{
    expect(true).to.equal(true)
    cy.visit('https://www.toolsqa.com/selenium-training/')
    cy.title().should('eq','Tools QA - Selenium Training')
cy.get("a[href='#enroll-form']:nth-child(2)").should('be.visible').click()
cy.get("input[name='firstName']").should('be.visible').should('be.enabled').type("secret_sauce")
cy.get("input[name='lastName']").should('be.visible').should('be.enabled').type("secret_sauch")
cy.get("input#email").should('be.visible').should('be.enabled').type("sasi@soman.com")
cy.get("input#mobile").should('be.visible').should('be.enabled').type("9998889998")
cy.get("select#country").should('be.visible').should('be.enabled').select("Albania")
cy.get("input#city").should('be.visible').should('be.enabled').type("tokyo")
cy.get("textarea#message").should('be.visible').should('be.enabled').type("punnaara")
cy.get("#enroll-form > button").should('be.visible').should('be.enabled').click()
})
it('test2',function()
{
    
    lo.enterUsername('Admin');
    lo.enterPassword('admin123');
    lo.clickLogin();
})
it ('test3',function()
{
    

    cy.get("input[name='username']").type('Admin')
    cy.get("input[name='password']").type('admin123')
    cy.get("button[type='submit']").click();
 
})
})