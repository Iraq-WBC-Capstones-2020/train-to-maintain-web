import React from 'react';
import MealType from './components/MealType/MealType';
import img from './components/MealType/img/wtgain.png';
function App() {
  return (
    <div>
      <MealType id="1" title="Gain weight" imgUrl={img} />
    </div>
  );
}

export default App;
