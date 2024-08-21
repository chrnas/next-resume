import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutPage from '@/components/AboutPage/AboutPage';

describe('AboutPage', () => {
  it('renders the AboutPage component', () => {
    render(<AboutPage />);
    const heading = screen.getByText("Christoffer Näs");
    expect(heading).toBeInTheDocument();
  });
});