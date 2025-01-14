import React from 'react';
import { render, screen, fireEvent } from '../test-utils';
import ShoppingCard from './ShoppingCard';

test('calls the asynchronous onAdd function when button is clicked', async () => {
  const mockOnAdd = jest.fn().mockResolvedValueOnce(() => Promise.resolve()); // Simulate an async function
  await render(<ShoppingCard name="Apple" price={2} onAdd={mockOnAdd} />);

  const button = screen.getByText('Add to Cart');
  fireEvent.click(button);

  // Wait for the mock function to be called
  await screen.findByText('Add to Cart'); // Wait for UI to stabilize (if needed)
  expect(mockOnAdd).toHaveBeenCalledTimes(1);
});
