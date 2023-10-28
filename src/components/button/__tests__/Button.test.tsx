import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../Button';

describe('reusable button test', () => {
  test('find a button by text', () => {
    render(<Button title='submit' />);
    const bntElement = screen.getByText('submit');
    expect(bntElement).toBeInTheDocument();
  });

  test('find a button by a role', () => {
    render(<Button title='submit' />);
    const btnElement = screen.getByRole('button');
    expect(btnElement).toBeInTheDocument();
  });

  test('test disabling the button', () => {
    render(<Button title='submit' disabled={true} />);
    const btnElement = screen.getByRole('button');
    expect(btnElement).toBeDisabled();
  });
});
