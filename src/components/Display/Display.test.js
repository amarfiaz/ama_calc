import { render, screen } from '@testing-library/react';
import Display from './Display'

test("renders the display", () => {
  render(<Display />);
  const displayElement = screen.getByTestId(/Display/i);
  expect(displayElement).toBeInTheDocument();
});
