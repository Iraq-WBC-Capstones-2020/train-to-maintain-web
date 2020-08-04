import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
test('renders learn react link', () => {
  const { getByTestId } = render(
    <Router>
      <Navbar />
    </Router>
  );
  const textElement = getByTestId('navbar');
  expect(textElement).toBeInTheDocument();
});
