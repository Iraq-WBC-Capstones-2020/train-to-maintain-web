import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';
test('Navbar renders succesfully', () => {
  render(<Navbar />);
});
