import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Label from '../Label';

describe('reusable label test', () => {
  test('find a lable by text', () => {
    render(<Label text='car' />);
    const label: HTMLLabelElement = screen.getByText('car');

    expect(label).toBeInTheDocument();
    screen.debug();
  });
});
