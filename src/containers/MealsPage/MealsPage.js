import React, { useState, useEffect } from 'react';
import RecipeCard from '../../components/Card/RecipeCard/RecipeCard';
import DropDown from '../../components/DropDown/DropDown';
import MealsFile from '../../assets/meals.txt';

export default function MealsPage() {
  const [mealList, setMealList] = useState([]);
  useEffect(() => {
    fetch(MealsFile)
      .then((resp) => resp.json())
      .then((data) => {
        setMealList(data.meals);
        console.log(data.meals);
      });
  }, []);
  return (
    <div>
      <div className="flex justify-end mt-6 pr-32">
        <DropDown />
      </div>
      <div className="flex flex-wrap mb-4">
        {mealList.map((meal) => (
          <div
            className="text-gray-700 text-center px-4 py-2 m-4"
            key={meal.id}
          >
            <RecipeCard
              image={meal.image}
              title={meal.title}
              calories={meal.calories}
              category={meal.category}
              duration={meal.duration}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
