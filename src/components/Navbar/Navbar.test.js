import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
test('Navbar renders succesfully', () => {
  <Router>
    render(
    <Navbar />
    );
  </Router>;
});
