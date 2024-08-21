import React from 'react';
import { render, screen } from '@testing-library/react';
import ExperiencePage from '@/components/ExperiencePage/ExperiencePage';

describe('ExperiencePage', () => {
  it('renders the ExperiencePage component', () => {
    render(<ExperiencePage />);
    const heading = screen.getByText("Experience");
    expect(heading).toBeInTheDocument();
  });
});