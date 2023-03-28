import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Footer from '.';

describe('Footer component', () => {
  it('displays footer text as expected', () => {
    render(<Footer/>);

    const footer = screen.getByTestId('footer');
    expect(footer).toHaveTextContent('2023 Code Fellows')
  });
});