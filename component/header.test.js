import React from 'react';
import {render, screen} from '@testing-library/react'
import Header from "./Header";
import {AuthProvider} from "../contexts/auth"


test('Header', () => {
  render(<AuthProvider/>)
  render(<Header />)
  
  expect(screen.getByTestId("nav")).toHaveTextContent('Home')
  expect(screen.getByTestId("nav")).toHaveTextContent('Browse')
})