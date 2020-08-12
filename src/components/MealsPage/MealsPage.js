import React from 'react';
import RecipeCard from '../Cards/Recipe-Card/Recipe-Card';
//import breakfast1 from '../Cards/Recipe-Card/img/meals/breakfast/breakfast1.jpg';

const mealList = [
  {
    image:
      'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-asia.com/headlines/markets/homegrown-successes-zespri-a2-milk-highlighted-as-biggest-new-zealand-f-b-growth-generating-firms/10847397-1-eng-GB/Homegrown-successes-Zespri-A2-Milk-highlighted-as-biggest-New-Zealand-F-B-growth-generating-firms_news_teaser_medium.jpg',
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
    image:
      'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2019/01/chicken-casserole-recipe.jpg',
    title: 'Classic Chicken Casserole',
    calories: '390 Calories',
    category: 'Lunch',
    duration: '30 min.',
  },
  {
    image:
      'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,w_730/k%2Farchive%2F985a73c50098583a0f87d6f5f28b8cced8ab2335',
    title: 'Tuna Salad',
    calories: '187 Calories',
    category: 'Lunch',
    duration: '10 min.',
  },
  {
    image:
      'https://cdn.apartmenttherapy.info/image/upload/v1559144163/k/archive/a54502124bcf08139f5c4a87b713c01564139869.jpg',
    title: 'Turkey & Cheese Bites',
    calories: '150 Calories',
    category: 'Lunch',
    duration: '20-25 min.',
  },
  {
    image:
      'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2017/04/mexican-stuffed-chicken-with-red-rice-scaled.jpg',
    title: 'Mexican Stuffed Chicken with red rice',
    calories: '467 Calories',
    category: 'Dinner',
    duration: '25 min.',
  },
  {
    image:
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/miso-roasted-aubergine-steaks.jpg',
    title: 'Miso-roasted aubergine steaks with sweet potato',
    calories: '344 Calories',
    category: 'Dinner',
    duration: '20 min.',
  },
  {
    image:
      'https://www.bbcgoodfood.com/sites/default/files/recipe_images/spaghetti_4.jpg',
    title: 'Super smoky bacon & tomato spaghetti',
    calories: '500 Calories',
    category: 'Dinner',
    duration: '25 min.',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdxxYX3kXKqal2R8J_RazipFc5xUjKRxQmFKeMyBkQ69TMGywV&s',
    title: ' Sweet Potato Chips',
    calories: '100 Calories',
    category: 'Snacks',
    duration: '2 hrs.',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn_-PAvNOU0xi-OC6QWgasq4HmYfxJavPXU7ukxM7wzx3F5I66&s',
    title: '  Peanut Butter and Honey Oat Bar',
    calories: '157 Calories',
    category: 'Snacks',
    duration: '25 min.',
  },
  {
    image:
      'https://i.pinimg.com/originals/61/3d/60/613d6095f19df359b80d0d824613a3e8.jpg',
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
        <div class="text-gray-700 text-center px-4 py-2 m-4">
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
  );
}
