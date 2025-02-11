import Link from 'next/link';
import { ListItems } from './_components/ListItems';
import { Recipe } from './_components/ListItems';


export default async function Home() {
    const recipesResponse = await fetch(
      'https://www.themealdb.com/api/json/v1/1/search.php?f=f'
       );
    if (!recipesResponse.ok) { 
      throw new Error("Failed to fetch data from the server");
    }
  
    const recipeData = await recipesResponse.json();

  return (
    recipeData &&  (
    <>
      <h1>Recipe App</h1>
      <ul className='flex flex-wrap gap-8'>
        {recipeData.meals.map((recipe: Recipe) => (
          <li key={recipe.idMeal}> 
          <Link href={`/recipes/${recipe.idMeal}`}>
          <ListItems recipe={recipe} /></Link>   
          </li>
        ))}
      </ul>
    </>
   )
  );
}