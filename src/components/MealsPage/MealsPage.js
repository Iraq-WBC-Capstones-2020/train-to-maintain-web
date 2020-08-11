import React from 'react';
import RecipeCard from '../Cards/Recipe-Card/Recipe-Card';
//import breakfast1 from '../Cards/Recipe-Card/img/meals/breakfast/breakfast1.jpg';

const mealList = [
  {
    image: './img/meals/breakfast/breakfast1.jpg',
    title: 'Kiwi, Greek yogurt & blueberries',
    calories: '95 Calories',
    category: 'Breakfast',
    duration: '2 min.',
  },
  {
    image:
      'https://images.everydayhealth.com/images/creative-ways-to-enjoy-eggs-08-joyful-healthy-eats-406x406.jpg',
    title: 'Quick And Easy Two Minute Omelet',
    calories: '187 Calories',
    category: 'Breakfast',
    duration: '2 min.',
  },
  {
    image:
      'https://i.pinimg.com/236x/57/57/5a/57575a79673cc0f0a0848bb5f328b588.jpg',
    title: 'Kiwi, Greek yogurt & blueberries',
    calories: '170 Calories',
    category: 'Breakfast',
    duration: '15 min.',
  },
  {
    image: './img/meals/lunch/lunch1.jpg',
    title: 'Classic Chicken Casserole',
    calories: '390 Calories',
    category: 'Lunch',
    duration: '30 min.',
  },
  {
    image: './img/meals/lunch/lunch2.jpg',
    title: 'Tuna Salad',
    calories: '187 Calories',
    category: 'Lunch',
    duration: '10 min.',
  },
  {
    image: './img/meals/lunch/lunch3.jpg',
    title: 'Turkey & Cheese Bites',
    calories: '150 Calories',
    category: 'Lunch',
    duration: '20-25 min.',
  },
  {
    image: './img/meals/dinner/dinner1.jpg',
    title: 'Mexican Stuffed Chicken with red rice',
    calories: '467 Calories',
    category: 'Dinner',
    duration: '25 min.',
  },
  {
    image: './img/meals/dinner/dinner2.jpg',
    title: 'Miso-roasted aubergine steaks with sweet potato',
    calories: '344 Calories',
    category: 'Dinner',
    duration: '20 min.',
  },
  {
    image: './img/meals/dinner/dinner3.jpg',
    title: 'Super smoky bacon & tomato spaghetti',
    calories: '500 Calories',
    category: 'Dinner',
    duration: '25 min.',
  },
  {
    image: './img/meals/snacks/snack1.png',
    title: ' Sweet Potato Chips',
    calories: '100 Calories',
    category: 'Snacks',
    duration: '2 hrs.',
  },
  {
    image: './img/meals/snacks/snack2.png',
    title: '  Peanut Butter and Honey Oat Bar',
    calories: '157 Calories',
    category: 'Snacks',
    duration: '25 min.',
  },
  {
    image: './img/meals/snacks/snack3.png',
    title: ' Dark Chocolate Nut Clusters',
    calories: '106 Calories',
    category: 'Snacks',
    duration: '15 min.',
  },
];
export default function MealsPage() {
  return (
    <div className="flex flex-wrap -mb-4">
      {mealList.map((meal) => (
        <div class="text-gray-700 text-center px-4 py-2 m-2">
          <RecipeCard prop={meal} />
        </div>
      ))}
    </div>
  );
}
