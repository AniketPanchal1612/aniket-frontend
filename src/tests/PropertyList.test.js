import { render } from '@testing-library/react';
import { useSelector } from 'react-redux'; 
import PropertyList from './../components/property/ProprtyList'
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn()
}));

test('Loading spinner appears when loading state is true', () => {
  // Mock useSelector to return loading as true
  useSelector.mockReturnValueOnce({ loading: true });

  const { container } = render(<PropertyList />);
  const spinner = container.querySelector('.custom-loader');   
  expect(spinner).toBeInTheDocument();
});
