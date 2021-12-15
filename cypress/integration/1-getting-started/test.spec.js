/// <reference types="cypress" />
import 'cypress-file-upload' 

describe('visiting_home_page',()=>{
    it('test_visiting_home_page',()=>{
        cy.visit('/')})})

describe('visit_browse',()=>{
    it('test_visit_browse',()=>{
        cy.visit('/browse');
        })
    })
        
        


describe('browse',()=>{
    it('test_browse',()=>{ 
cy.get('.px-2:nth-child(3)').click();
cy.get('#cars').type('Vehicles');
cy.get('#cars').type('Jewelry');
cy.get('#cars').type('All');
cy.get('.text-b-500').click();
})})

describe('search',()=>{
    it('test_search',()=>{ 
// cy.get('#item').click();
cy.get('#item').type('iPhone');
cy.get('.m-2').submit();
cy.url().should('contains','/SearchResult?q=iPhone')
})})

describe('item_details',()=>{
    it('test_item_details',()=>{ 
        cy.get('#button-bid').click();
        cy.url().should('contains', '/detail/1');
})})

describe('render_signUp',()=>{
    it('test_render_signUp',()=>{
        cy.get('#register-button').click();
        cy.url().should("contains","/signUpForm")
        cy.get('#email').type('tasneem@admin.com')
        cy.get('#username-register').type('tasneem11')
        cy.get('#password-register').type('whatever..1')
        cy.get('#email').should('have.length', 1)
        cy.get('#username-register').should('have.length', 1)
    })
})



describe('render_login',()=>{
    it('test_render_login',()=>{
        cy.get('#login-button').click();
        cy.url().should("contains","/loginForm")
        cy.get('#username').type('tasneem')
        cy.get('#password').type('whatever..1')
        cy.get('#sign-in').click()
        cy.url().should("contains","/loginForm")
    })
    it('test_render_login_fail',()=>{
        cy.get('#login-button').click();
        cy.url().should("contains","/loginForm")
        cy.get('#username').type('rana')
        cy.get('#password').type('whatever..1')
        cy.get('#sign-in').click()
        cy.url().should("contains","/loginForm")
    })
})

describe('add_item',()=>{
    it('test_add_item',()=>{
        cy.get('#add-item-button').click();
        cy.url().should("contains","/itemForm")
        cy.get('#title').type('car')
        cy.get('#description').type('about the car')
        cy.get('#category').type('Vehicles')
        cy.get('#image-upload').attachFile('assets/jewel.jpg')
        cy.get('#price').type(100)
        cy.get('#bid_increment').type(10)
        cy.get('#start-time').type('2020-06-01T08:30')
        cy.get('#end-time').type('2021-09-01T08:30')
        cy.get('#location').type('Amman')
        cy.get('#save-item').click()
        cy.url().should("contains","/itemForm")
    })
})

describe('add_item',()=>{
    it('test_add_item',()=>{
        cy.get('#submit-bid').click();
        cy.url().should("contains","/itemForm/detail/1")

    })
})
















 