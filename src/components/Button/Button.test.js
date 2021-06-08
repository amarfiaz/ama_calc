import { render, screen } from '@testing-library/react';
import Button from './Button'

test("renders a button", () => {
  render(<Button />);
  const buttonElement = screen.getByTestId(/Button/i);
  expect(buttonElement).toBeInTheDocument();
});
