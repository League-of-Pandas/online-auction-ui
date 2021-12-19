import React from 'react';
import {render, screen, cleanup} from '@testing-library/react'
import Footer from './Footer';

describe('Footer', () => {
  it('renders a heading', () => {
    render(<Footer />)

    const heading = screen.getByTestId('footer')

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('contact us')
  })
})


