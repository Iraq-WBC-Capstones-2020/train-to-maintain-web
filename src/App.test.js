import React from 'react';
import { render } from '@testing-library/react';

import BlogCard from './components/Card/BlogCard/BlogCard';
test('render children succesfully', () => {
  render(<BlogCard />);
});
