import React from 'react';
import BlogCard from './components/Card/BlogCard/BlogCard';
function App() {
  return (
    <div>
      <BlogCard
        title="10 tips I wish I knew before I started to workout."
        imgUrl="https://tailwindcss.com/img/card-top.jpg"
        overview="If you have been planning to start working out for the last couple of months but you always procrastinate about how, where, and when to start, here are 10 tips that really helped throughout my journey and I wish I knew from the beginning"
        author="Evan Hameed"
        publishDate="jul 19"
      />
    </div>
  );
}

export default App;
