import { render, screen } from '@testing-library/react';
import Keypad from './Keypad'

test("renders the keypad", () => {
  render(<Keypad />);
  const keypadElement = screen.getByTestId(/Keypad/i);
  expect(keypadElement).toBeInTheDocument();
});
