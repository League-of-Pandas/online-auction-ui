/// <reference types="cypress" />

describe('test',()=>{
    it('test', ()=>{
        // cy.visit('http://localhost:3000/');
    cy.get('.px-2:nth-child(3)').click();
    cy.get('#cars').type('Electronics');
    cy.get('#cars').type('Vehicles');
    cy.get('.bg-yellow-500').click();
    cy.get('#username').type('tasneem');
    cy.get('#password').type('123');
    cy.get('#email').click();
    cy.get('#email').type('tasneem.alabsi@gmail.com');
    cy.get('#email').click();
    cy.get('#email').type('{backspace}');
    cy.get('#email').type('tasneem@admin.com');
    cy.get('#username').click();
    cy.get('.min-h-full').click();
    cy.get('.text-sm').click();
    cy.get('.mt-8').submit();

    })
})

describe('browse page', ()=>{
    it('test_browse', ()=>{
        
        cy.visit('http://localhost:3000/');
        cy.get('.px-2:nth-child(3)').click();
        cy.get('#cars').type('Vehicles');
        
        cy.get('#cars').type('Jewelry');
        
        cy.get('#cars').type('All');
        
        

    })
})

describe('register',()=>{
    it('test_register',()=>{
        cy.get('.font-bold').click();
        cy.get('#username').type('tasneem');
        cy.get('#password').type('123');
        cy.get('#email').type('admin@admin.com');
        cy.get('#username').type('admin');
        cy.get('#password').type('whatever..1');
        cy.get('.mt-8').submit();

    })
})
