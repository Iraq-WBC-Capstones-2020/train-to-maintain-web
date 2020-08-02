import React from 'react';
import LandingPageCard from './components/Card/LandingPageCard';
function App() {
  return (
    <div>
      <h1 className="text-3xl text-purple-500">Train To Maintain</h1>
      <LandingPageCard
        image={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-1Vza7eYtgTe8genL0nMzwzgh2OAVChbG7w&usqp=CAU'
        }
        title={'Meals'}
      />
    </div>
  );
}

export default App;
