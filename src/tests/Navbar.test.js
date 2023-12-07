import { render, screen } from '@testing-library/react';
import Navbar from '../components/layouts/Navbar';

test('test 1', () => {
  render(<Navbar />);
  
  // Use getByText to find the button element
  const buttonElement = screen.getByText('My Bookings');
  
  // Check if the button element is in the document
  expect(buttonElement).toBeInTheDocument();
});
