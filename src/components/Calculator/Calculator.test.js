import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator'

test("renders calculator", () => {
  render(<Calculator />);
  const calculatorElement = screen.getByTestId(/Calculator/i);
  expect(calculatorElement).toBeInTheDocument();
});

test("displays numbers", () => {
  render(<Calculator />);
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  numbers.forEach((n) => {
    expect(screen.getByText(n.toString())).toBeInTheDocument();
  });
});

test("displays operators", () => {
  render(<Calculator />);
  const operators = ["+", "-", "x", "/"];

  operators.forEach((n) => {
    expect(screen.getByText(n.toString())).toBeInTheDocument();
  });
});

test("displays equals sign", () => {
  render(<Calculator />);
  const equals = ["="];

  equals.forEach((n) => {
    expect(screen.getByText(n.toString())).toBeInTheDocument();
  });
});

test("add operations are calculated corretly", () => {
  render(<Calculator />);

  const nine = screen.getByText("9");
  const two = screen.getByText("2");
  const plus = screen.getByText("+");
  const equals = screen.getByText("=");
  const result = ["101"];

  fireEvent.click(nine);
  fireEvent.click(nine);
  fireEvent.click(plus);
  fireEvent.click(two);
  fireEvent.click(equals);

  result.forEach((n) => {
    expect(screen.getByText(n.toString())).toBeInTheDocument();
  });
});

test("subtract operations are calculated corretly", () => {
  render(<Calculator />);

  const nine = screen.getByText("9");
  const two = screen.getByText("2");
  const minus = screen.getByText("-");
  const equals = screen.getByText("=");
  const result = ["97"];

  fireEvent.click(nine);
  fireEvent.click(nine);
  fireEvent.click(minus);
  fireEvent.click(two);
  fireEvent.click(equals);

  result.forEach((n) => {
    expect(screen.getByText(n.toString())).toBeInTheDocument();
  });
});
