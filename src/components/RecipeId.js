import axios from 'axios';
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';

const RecipeId = () => {
  const [recipe, setRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { uuid } = useParams();

  useEffect(() => {
    getData();
  }, []);
  console.log(uuid)
  const getData = () => {
    const ENDPOINT = 'http://localhost:3001/recipes/';
    console.log("catch")
    axios
      .get(ENDPOINT + uuid)
      .then((response) => {
        console.log('RES', response?.data);
        if (response.data) {
          setRecipe(response?.data);
        } else {
          console.log('An error occurred');
        }
      })
      .catch((error) => {
        console.log('An error occurred', error);
      });

  };

  console.log({ recipe })
  return (

    <div className='card-grid'>
      <div className='card card-shadow'>
        <div className='card-header'>
          <h1 className='recipeTitle'>{recipe.title}</h1>
          <h1 className='recipePosted'>Posted: {recipe?.postDate}</h1>
          <img
            className='card-image'
            src={recipe?.images?.medium}
            alt={recipe?.title}
          />
        </div>
        <div className='card-body'>
          <h3 className='card-description'>{recipe?.description}</h3>
          <h3 className='card-description'>Servings: {recipe?.servings} </h3>
          <h3 className='card-description'>Prep Time: {recipe?.prepTime} minutes</h3>
          <h3 className='card-description'>Cook Time: {recipe?.cookTime} minutes</h3>
          <br />
          <h3 className='ing-txt'>Ingredients:</h3>
          <br />

          <h3 className=''>
            {recipe?.ingredients?.map((ing) => {
              return (
                <dl key={ing?.uuid}>
                  <dt>{ing?.name}</dt>
                </dl>
              );
            })}
          </h3>
          <br />
          <h3 className='ing-txt'>Directions:</h3>
          <br />
          <h3>
            {recipe?.directions?.map((dir, index) => {
              return (
                <dl key={index}>
                  <dt>{dir?.instructions}</dt>
                </dl>
              );
            })}
          </h3>
        </div>
        <div className='card-footer'>

          <Link to={'/addrecipe'}>
            <button className='btn'>Add Recipe</button>
          </Link>
        </div>
      </div>
    </div>

  );
};
export default RecipeId;
