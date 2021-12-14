/// <reference types="cypress" />

// describe('test',()=>{
//     it('test', ()=>{
//         // cy.visit('http://localhost:3000/');
//     // cy.get('.px-2:nth-child(3)').click();
//     cy.get('#cars').type('Electronics');
//     cy.get('#cars').type('Vehicles');
//     cy.get('.bg-yellow-500').click();
//     cy.get('#username').type('tasneem');
//     cy.get('#password').type('123');
//     cy.get('#email').click();
//     cy.get('#email').type('tasneem.alabsi@gmail.com');
//     cy.get('#email').click();
//     cy.get('#email').type('{backspace}');
//     cy.get('#email').type('tasneem@admin.com');
//     cy.get('#username').click();
//     cy.get('.min-h-full').click();
//     cy.get('.text-sm').click();
//     cy.get('.mt-8').submit();

//     })
// })

// describe('browse page', ()=>{
//     it('test_browse', ()=>{
//         // cy.get('.px-2:nth-child(3)').click();
//         cy.get('#cars').type('Vehicles');
        
//         cy.get('#cars').type('Jewelry');
        
//         cy.get('#cars').type('All');
        
        

//     })
// })

describe('visiting_home_page',()=>{
    it('test_visiting_home_page',()=>{
        cy.visit('http://localhost:3000/')})})

describe('register',()=>{
    it('test_register',()=>{
        // cy.get('.items-center > .font-bold').click();
        // cy.get('#username').type('tasneem');
        // cy.get('#password').type('123');
        // cy.get('#email').click();
        cy.get('#email').type('anything@admin.com');
        cy.get('.min-h-full').click();
        cy.get('#username').type('anything');
        cy.get('.min-h-full').click();
        cy.get('.min-h-full').click();
        cy.get('#password').type('{backspace}');
        cy.get('#password').type('{backspace}');
        cy.get('#password').type('whatever..1')})})
        // cy.get('.text-sm').click();
        // cy.get('.mt-8').submit();
        // cy.get('.text-yellow-600').click();

describe('login',()=>{
    it('test_login',()=>{   
        cy.get('#username').type('anything');
        cy.get('#password').type('whatever..1');
        cy.get('.bg-indigo-600').click();
        cy.get('.mt-8').submit();
        cy.get('.px-2:nth-child(3)').click();
        // cy.get('#cars').type('Electronics');
        // cy.get('#cars').click();
        // cy.get('#cars').type('Vehicles');
        // cy.get('#cars').click();
        // cy.get('.mx-8').click();
        // cy.get('#cars').type('Jewelry');
        cy.get('#cars').click();
        cy.get('.text-b-500').click()})})

describe('search',()=>{
    it('test_search',()=>{ 
        cy.get('#item').click();
        cy.get('#item').type('whatever');
        cy.get('.bg-yellow-500').click();
        cy.get('.m-2').submit();})})

describe('item_details',()=>{
    it('test_search',()=>{ 
        cy.get('.w-24').click();
        cy.url().should('contains', 'http://localhost:3000/detail/1');
        

    })
})

 