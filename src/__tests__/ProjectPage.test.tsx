import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectPage from '@/components/ProjectPage/ProjectPage';

describe('ProjectPage', () => {
  it('renders the ProjectPage component', () => {
    render(<ProjectPage />);
    const heading = screen.getByText("Projects");
    expect(heading).toBeInTheDocument();
  });
});