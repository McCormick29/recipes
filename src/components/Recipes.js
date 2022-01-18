import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const ENDPOINT = 'http://localhost:3001/recipes';

    axios
      .get(ENDPOINT)
      .then((response) => {
        console.log('RES', response.data);

        if (response.data) {
          setRecipes(response.data);
        } else {
          console.log('An error occurred');
        }
      })
      .catch((error) => {
        console.log('An error occurred', error);
      });
  };

  const recipesRenderer = recipes.map((recipe) => {
    return (
      <div key={recipe.uuid} className='card-grid'>
        <div className='card card-shadow'>
          <div className='card-header'>
            <h1 className='recipeTitle'>{recipe.title}</h1>
            <h1 className='recipePosted'>Posted: {recipe.postDate}</h1>
            <img
              className='card-image'
              src={recipe.images.medium}
              alt={recipe.title}
            />
          </div>

          <div className='card-body'>
            <h3 className='card-description'>{recipe.description}</h3>
            <br />
            <h3 className='card-description'>Servings: {recipe.servings}</h3>
            <h3 className='card-description'>Prep Time: {recipe.prepTime}</h3>
            <h3 className='card-description'>Cook Time: {recipe.cookTime}</h3>
          </div>

          <div className='card-footer'>
            <Link to={`/recipeId/${recipe.uuid}`}>
              <button className='btn'>See Full Recipe</button>
            </Link>
            <Link to={'/addrecipe'}>
              <button className='btn btn-outline'>Add Recipe</button>
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return <div>{recipesRenderer}</div>;
};
