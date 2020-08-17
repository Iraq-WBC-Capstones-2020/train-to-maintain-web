import React, { useEffect, useState } from 'react';
import RecipeCard from '../../components/Card/RecipeCard/RecipeCard';
import mealsfile from '../../assets/Meals.txt';
import { Link } from 'react-router-dom';
const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [category, setCategory] = useState('All');
  useEffect(() => {
    fetchMeals();
  }, [category]);
  const fetchMeals = () => {
    fetch(mealsfile)
      .then((resp) => resp.json())
      .then((data) => {
        const filtered = data.meals.filter(
          (meal) => meal.category === category
        );
        category === 'All' ? setMeals(data.meals) : setMeals(filtered);
      });
  };
  const handleCategoryChange = (type) => {
    setCategory(type);
  };
  return (
    <div className="w-screen  flex flex-col mt-8">
      <div className=" flex items-center justify-end md:mr-16 mr-8 mb-8 ">
        <div className="group inline-block text-poppins text-secondary">
          <button className="outline-none focus:outline-none border px-3 py-1 bg-primary rounded-sm flex items-center min-w-32">
            <span className="pr-1 font-semibold flex-1">{category}</span>
            <span>
              <svg
                className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <ul
            className="bg-primary border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
          >
            <li
              className="rounded-sm px-3 py-1 hover:bg-purple-700"
              onClick={() => handleCategoryChange('All')}
            >
              All
            </li>
            <li
              className="rounded-sm px-3 py-1 hover:bg-purple-700"
              onClick={() => handleCategoryChange('breakfast')}
            >
              breakfast
            </li>
            <li
              className="rounded-sm px-3 py-1 hover:bg-purple-700"
              onClick={() => handleCategoryChange('lunch')}
            >
              lunch
            </li>
            <li
              className="rounded-sm px-3 py-1 hover:bg-purple-700"
              onClick={() => handleCategoryChange('dinner')}
            >
              dinner
            </li>
          </ul>
        </div>
      </div>

      <div className=" flex flex-wrap justify-center mb-20">
        {meals.map((meal) => {
          return (
            <>
              <Link
                className="lg:w-1/4 xl:w-1/4 md:w-1/3 sm:w-full m-4"
                to={`/meals/${meal.id}`}
              >
                <RecipeCard
                  key={meal.id}
                  image={meal.image}
                  duration={meal.timeForPrep}
                  title={meal.title}
                  category={meal.category}
                  calories={meal.nutritions[0].kcal}
                />
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Meals;
