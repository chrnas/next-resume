import React from 'react';
import { render, screen } from '@testing-library/react';
import EducationPage from '@/components/EducationPage/EducationPage';

describe('EducationPage', () => {
  it('renders the EducationPage component', () => {
    render(<EducationPage />);
    const heading = screen.getByText("Education");
    expect(heading).toBeInTheDocument();
  });
});