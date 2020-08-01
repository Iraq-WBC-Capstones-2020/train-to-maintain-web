import React from 'react';
import { render } from '@testing-library/react';
import BlogCard from './BlogCard';

test('renders learn react link', () => {
  const { getByTestId } = render(<BlogCard />);
  const textElement = getByTestId('blogcard');
  expect(textElement).toBeInTheDocument();
});
