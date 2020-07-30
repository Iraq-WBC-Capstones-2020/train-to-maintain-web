import React from 'react';
import BlogCard from './components/Card/BlogCard/BlogCard';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div>
      <Navbar />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
}

export default App;
