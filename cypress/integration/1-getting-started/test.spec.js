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
cy.get('#item').type('iPhone');
cy.get('.m-2').submit();
cy.url().should('contains','/searchResult?q=iPhone')
})})

describe('item_details',()=>{
    it('test_item_details',()=>{ 
        cy.get('#bid-button').click();
        cy.url().should('contains', '/detail/1');
})})

describe('render_signUp',()=>{
    it('test_render_signUp',()=>{
cy.visit('/');
cy.get('#register-button').click();
cy.get('#username-register').type('tasneem12');
cy.get('#password-register').type('whatever..1');
cy.get('#email').click();
cy.get('#email').type('salam@admin.com');
cy.get('.py-12').click();
cy.get('#username-register').type('salam');
cy.get('.text-sm').click();
cy.get('.mt-8').submit();

    })
})



describe('render_login',()=>{
    it('test_render_login',()=>{
        cy.visit('/');
        cy.get('[data-testid=nav]').click();
        cy.get('#login-button').click();
        cy.get('#username').type('salam');
        cy.get('#password').type('whatever..1');
        cy.get('#username').click();
        cy.url().should('contains', '/')
        
    })
})

// describe('add_item',()=>{
//     it('test_add_item',()=>{
// cy.visit('/');
// // cy.get('div:nth-child(1) > .relative').click();///
// cy.get('#login-button').click();
// cy.get('#username').type('tasneem');
// cy.get('#password').type('whatever..1');
// cy.get('#sign-in').click();
// cy.get('#add-item-button').click();
// cy.get('#title').click();
// cy.get('#title').type('Electric Guitar');
// cy.get('#description').click();
// cy.get('#description').type('Manuel Rodriguez Acoustic Electric Guitar');
// cy.get('#category').type('Electronics');
// cy.get('#category').select('Electronics');
// cy.get('#price').click();
// cy.get('#price').type('20');
// cy.get('#bid_increment').click();
// cy.get('#bid_increment').type('2');
// cy.get('#start-time').click();
// cy.get('#start-time').type('2021-12-24T04:03');
// cy.get('#end-time').click();
// cy.get('#end-time').type('2022-01-24T04:03');
// cy.get('#save-item').click();
// cy.get('.mb-8').submit();

//     })
// })




describe('item_details_from_browse',()=>{
    it('test_item_details_from_browse',()=>{
        cy.visit('/');
        cy.get('#login-button').click();
        cy.url().should('contains', '/loginForm');
        cy.get('#username').type('tasneem');
        cy.get('#password').type('whatever..1');
        cy.get('#sign-in').click();
        cy.url().should('contains', '/');
        cy.get('#browse-link').click();
        cy.url().should('contains', '/browse');
        cy.get('.px-2:nth-child(3)').click();
        cy.get('#cars').type('Electronics');
        cy.get('#bid-browse').click();
        cy.url().should('contains', '/detail/37');
    })
})

describe('logout',()=>{
    it('test_logout',()=>{
        cy.visit('/');
        cy.get('#login-button').click();
        cy.get('#username').type('tasneem');
        cy.get('#password').type('whatever..1');
        cy.url().should('contains', '/');
        cy.get('#login-button').click();
        cy.url().should('contains', '/');
})
})

describe('profile',()=>{
    it('test_profile',()=>{
cy.visit('/');
cy.get('#login-button').click();
cy.get('#username').type('tasneem');
cy.get('#password').type('whatever..1');
cy.get('#sign-in').click();
cy.get('.py-2:nth-child(3)').click();
cy.url().should('contains', '/profile');
})
})




describe('search_fail',()=>{
    it('test_search_fail',()=>{
cy.visit('http://localhost:3000/#');
cy.get('#item').click();
cy.get('#item').type('anything');
cy.get('.border-2').click();
cy.get('.m-2').submit();

})
})

describe('about_us',()=>{
    it('test_about_us',()=>{
cy.visit('http://localhost:3000/');
cy.get('div:nth-child(1) > .relative').click();
cy.get('.px-2:nth-child(4)').click();
cy.get('.text-b-500').click();
})
})










 