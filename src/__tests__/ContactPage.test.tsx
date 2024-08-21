import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactPage from '@/components/ContactPage/ContactPage';

describe('ContactPage', () => {
  it('renders the ContactPage component', () => {
    render(<ContactPage />);
    const heading = screen.getByText("Contact");
    expect(heading).toBeInTheDocument();
  });
});