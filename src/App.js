import React from 'react';
import BlogCard from './components/Card/BlogCard/BlogCard';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div>
      <Navbar />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <Footer />
    </div>
  );
}

export default App;
