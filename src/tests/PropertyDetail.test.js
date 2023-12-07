import { render, fireEvent } from '@testing-library/react';
import PropertyDetail from '../components/property/PropertyDetail'; 

test('Clicking "Book Now" button triggers action', () => {
  const { getByText } = render(<PropertyDetail />);
  
  // Find the "Book Now" button element
  const bookNowButton = getByText('Book Now');
  
  // Simulate a click on the button
  fireEvent.click(bookNowButton);
  
});
