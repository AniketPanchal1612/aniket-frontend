import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux'; 
import UserInfoForm from './../components/users/UserInfoForm'; 

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn()
}));

test('Submitting User Information Form works correctly', () => {
  const mockDispatch = jest.fn();
  useDispatch.mockReturnValue(mockDispatch);

  const { getByLabelText, getByText } = render(<UserInfoForm />);

  // Simulate user input
  fireEvent.change(getByLabelText('User Name'), { target: { value: 'John Doe' } });
  fireEvent.change(getByLabelText('Email Id'), { target: { value: 'john@example.com' } });
  fireEvent.change(getByLabelText('Mobile Number'), { target: { value: '1234567890' } });
  fireEvent.change(getByLabelText('Address'), { target: { value: '123 Main St' } });
  fireEvent.change(getByLabelText('Desire Booking Date'), { target: { value: '2023-12-25' } });

  // Simulate form submission
  fireEvent.click(getByText('Confirm'));

  expect(mockDispatch).toHaveBeenCalledWith
  
});
