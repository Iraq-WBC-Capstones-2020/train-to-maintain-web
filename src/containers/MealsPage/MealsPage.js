import React, { useState, useEffect } from 'react';
import RecipeCard from '../../components/Card/RecipeCard/RecipeCard';
import DropDown from '../../components/DropDown/DropDown';
import MealsFile from '../../assets/meals.txt';

export default function MealsPage() {
  const [mealList, setMealList] = useState([]);
  const [filterFlag, setfilterFlag] = useState();
  const [category, setCategory] = useState();
  //console.log('this initial category' + category);
  useEffect(() => {
    fetch(MealsFile)
      .then((resp) => resp.json())
      .then((data) => {
        setMealList(data.meals);
      });
    if (filterFlag) {
      mealFilter();
      setfilterFlag(false);
    }
  }, []);

  function mealFilter() {
    let result =
      category === 'All'
        ? mealList
        : mealList.filter((meal) => meal.category === category);

    console.log('the result' + result);
    setMealList(result);
  }

  return (
    <div>
      <div className="flex justify-end mt-6 pr-32">
        <DropDown
          setMealList={setMealList}
          setfilterFlag={setfilterFlag}
          setCategory={setCategory}
        />
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
