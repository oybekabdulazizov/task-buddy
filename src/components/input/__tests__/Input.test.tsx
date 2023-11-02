import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Input from '../Input';

describe('reusable input test', () => {
  test('find a text input by role', () => {
    render(<Input value='' type='text' onChange={() => {}} />);
    const textInput: HTMLInputElement = screen.getByRole('textbox');

    expect(textInput).toBeInTheDocument();
    screen.debug();
  });

  test('check input onChange working', async () => {
    render(
      <Input
        value='www'
        type='text'
        onChange={() => console.log('onChange working')}
      />
    );
    const textInput: HTMLInputElement = screen.getByRole('textbox');

    expect(textInput.value).toBe('www');
    fireEvent.change(textInput, { target: { value: 'hello' } });
    expect(textInput.value).toBe('hello');
    screen.debug();
  });

  test('check input is disabled', async () => {
    render(
      <Input value='www' type='text' disabled={true} onChange={() => {}} />
    );
    const textInput: HTMLInputElement = screen.getByRole('textbox');

    expect(textInput).toBeDisabled();
    screen.debug();
  });
});
