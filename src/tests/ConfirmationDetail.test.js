import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux'; 
import ConfirmationDetail from './../components/users/ConfirmationDetail'; 

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn()
}));

test('Clicking "Confirm Booking" button triggers action', () => {
  
  const mockDispatch = jest.fn();
  useDispatch.mockReturnValue(mockDispatch);


  useSelector.mockReturnValue({
    userData: {
      username: 'John Doe',
      email: 'john@example.com',
      contact: '1234567890',
      address: '123 Main St',
      selectedDate: '2023-12-25' 
    },
    singleProperty: {
      id: 1,
      title: 'Sample Property',
      locality: 'Sample Locality',
      rent: 10000,
      area: 1000,
      list_view_photos: ['image_url']
     
    }
  });

  const { getByText } = render(<ConfirmationDetail />);
  
  // Find the "Confirm Booking" button element
  const confirmBookingButton = getByText('Confirm Booking');
  
  
  fireEvent.click(confirmBookingButton);

  // Expect the dispatch function to have been called with the expected action
  expect(mockDispatch).toHaveBeenCalledWith
  
});
