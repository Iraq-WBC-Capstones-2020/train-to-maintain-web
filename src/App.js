import React from 'react';
import LandingPageCard from './components/Card/LandingPageCard';

function App() {
  return (
    <div>
      <h1 className="text-3xl text-purple-500">Train To Maintain</h1>
      <LandingPageCard
        image={
          'https://live.staticflickr.com/1922/30712761087_9657616fea_b.jpg'
        }
        title={'Meals'}
      />
    </div>
  );
}

export default App;
