/// <reference types="cypress" />



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

        describe('visit_browse',()=>{
            it('test_visit_browse',()=>{
                cy.visit('http://localhost:3000/browse');
            })
        })
        
        


describe('browse',()=>{
    it('test_browse',()=>{ 
        // cy.visit('http://localhost:3000/');
cy.get('.px-2:nth-child(3)').click();
cy.get('#cars').type('Vehicles');
cy.get('#cars').type('Jewelry');
cy.get('#cars').type('All');
cy.get('.text-b-500').click();
// cy.get('#item').click();
// cy.get('#item').type('whatever');
// cy.get('#item').click();
// cy.get('.m-2').submit();
// cy.get('.w-24').click();
// cy.url().should('contains', 'http://localhost:3000/detail/1');
})})

describe('search',()=>{
    it('test_search',()=>{ 
cy.get('#item').click();
cy.get('#item').type('whatever');
cy.get('#item').click();
cy.get('.m-2').submit();
})})

describe('item_details',()=>{
    it('test_item_details',()=>{ 
        cy.get('.w-24').click();
        cy.url().should('contains', 'http://localhost:3000/detail/1');
})})










 