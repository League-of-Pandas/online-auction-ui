import React from 'react';
import {render, screen, cleanup} from '@testing-library/react'
import Footer from '../component/Footer';
import Header from '../component/Header'

jest.mock('/home/tahany/online-auction-ui/component/Header.js', () =>
    jest.genMockFromModule('/home/tahany/online-auction-ui/component/Header.js'),
);

// describe('should render Header component', () => {
//    it("test1", () => {
//     render(<Header />)
//     const headerElement = document.getByTestId('nav')
//     expect(headerElement).toBeInTheDocument()
//     expect(headerElement).toHaveTextContent('Home')
//     expect(headerElement).toHaveTextContent('Browse')
//     expect(headerElement).toHaveTextContent('About Us')
//     expect(headerElement).toHaveTextContent('Contact Us')
//    })
// });

describe('Footer', () => {
  it('renders a heading', () => {
    render(<Footer />)

    const heading = screen.getByTestId('footer')

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('contact us')
  })
})


