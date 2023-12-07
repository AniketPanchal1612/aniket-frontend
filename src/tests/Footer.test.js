import { render, screen } from '@testing-library/react';
import Footer from './../components/layouts/Footer'; 
test('Footer contains Nestaway text', () => {
  render(<Footer />);
  
  // Check if the Nestaway text is present
  const nestawayText = screen.getByText("NestAway is India's fastest growing");
  expect(nestawayText).toBeInTheDocument();
});

test('Footer contains "About Us" in the links', () => {
  render(<Footer />);
  
  // Check if "About Us" is present in the links
  const aboutUsLink = screen.getByText('About Us');
  expect(aboutUsLink).toBeInTheDocument();
});
