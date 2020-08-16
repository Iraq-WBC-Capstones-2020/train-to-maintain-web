import React, { useState, useEffect } from 'react';
import RecipeCard from '../../components/Card/RecipeCard/RecipeCard';
import DropDown from '../../components/DropDown/DropDown';
import MealsFile from '../../assets/meals.txt';

export default function MealsPage() {
  const [mealList, setMealList] = useState([]);

  //console.log('this initial category' + category);
  useEffect(() => {
    fetch(MealsFile)
      .then((resp) => resp.json())
      .then((data) => {
        setMealList(data.meals);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-end mt-6 pr-32">
        <DropDown mealList={mealList} setMealList={setMealList} />
      </div>
      <div className="flex flex-wrap m-4">
        {mealList.map((meal) => (
          <RecipeCard
            image={meal.image}
            title={meal.title}
            calories={meal.nutritions[0].kcal}
            category={meal.category}
            duration={meal.timeForPrep}
          />
        ))}
      </div>
    </div>
  );
}
