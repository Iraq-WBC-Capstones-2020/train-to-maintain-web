import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Navbar from './components/Navbar/Navbar';
import BlogCard from './components/Card/BlogCard/BlogCard';
test('render children succesfully', () => {
  render(<Navbar />);
  render(<BlogCard />);
});
