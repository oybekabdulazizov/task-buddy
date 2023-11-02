import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Checkbox from '../Checkbox';

describe('reusable checkbox test', () => {
  test('find a checkbox by alt text', () => {
    render(<Checkbox checked={true} onChange={() => {}} />);
    const checkbox: HTMLInputElement = screen.getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
    screen.debug();
  });

  test('test checkbox: false -> true', () => {
    render(
      <Checkbox checked={false} onChange={() => console.log('false -> true')} />
    );
    const checkbox: HTMLInputElement = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    screen.debug();
  });

  test('test checkbox: true -> false', () => {
    render(
      <Checkbox checked={true} onChange={() => console.log('true -> false')} />
    );
    const checkbox: HTMLInputElement = screen.getByRole('checkbox');

    expect(checkbox.checked).toEqual(true);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(false);
    screen.debug();
  });

  test('test checkbox: disabled', () => {
    render(<Checkbox checked={true} disabled={true} onChange={() => {}} />);
    const checkbox: HTMLInputElement = screen.getByRole('checkbox');

    expect(checkbox).toBeDisabled();
    screen.debug();
  });
});
