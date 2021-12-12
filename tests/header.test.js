import {render, screen, cleanup} from '@testing-library/react'
import Header from '../component/Header'

afterEach(() => {
  cleanup();
})
test('should render Header component', () => {
  render(<Header />);
  const headerElement = screen.getByTestId('nav');
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveTextContent('Home')
  expect(headerElement).toHaveTextContent('Browse')
  expect(headerElement).toHaveTextContent('About Us')
  expect(headerElement).toHaveTextContent('Contact Us')
})
