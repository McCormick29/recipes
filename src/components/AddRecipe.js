import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const AddRecipe = () => {
  const [formData, setFormData] = useState({
    uuid: uuidv4(),
    title: '',
    description: '',
    serving: 0,
    prepTime: 0,
    cookTime: 0,
    ingredients: uuidv4(),
    amount: "",
    measurement: "",
    name: "",
    instructions: ""
  });

  const [displayIngredientInput, toggleIngredientInput] = useState(false);

  const {
    title,
    description,
    serving,
    prepTime,
    cookTime,
    amount,
    measurement,
    name,
    instructions
  } = formData;


  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    async function addRecipe() {
      const res = await axios.post(
        'http://localhost:3001/recipes',
        formData,
      );
    }
    addRecipe();
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Create Your Recipe</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Let's get some information to make your
        recipe
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='title'
            name='title'
            value={title}
            onChange={(e) => onChange(e)}
          />
        </div>

        <small className='form-text'>
          Recipe name
        </small>

        <div className='form-group'>
          <input
            type='text'
            placeholder='description'
            name='description'
            value={description}
            onChange={(e) => onChange(e)}
          />
        </div>

        <small className='form-text'>
          Description of your recipe
        </small>

        <div className='form-group'>
          <input
            type='text'
            placeholder='description'
            name='serving'
            value={serving}
            onChange={(e) => onChange(e)}
          />
        </div>

        <small className='form-text'>
          How many will your recipe server
        </small>

        <div className='form-group'>
          <input
            type='text'
            placeholder='prep time'
            name='prepTime'
            value={prepTime}
            onChange={(e) => onChange(e)}
          />
        </div>

        <small className='form-text'>
          How long is your preparation
        </small>

        <div className='form-group'>
          <input
            type='text'
            placeholder='cook time'
            name='cookTime'
            value={cookTime}
            onChange={(e) => onChange(e)}
          />
        </div>

        <small className='form-text'>
          How long is the cook time
        </small>
        <br />
        <div className='my-2'>
          <button
            onClick={() => toggleIngredientInput(!displayIngredientInput)}
            type='button'
            className='btn btn-light'
          >
            Add Ingredients and directions
          </button>
          <span>Optional</span>
        </div>

        {displayIngredientInput && (
          <Fragment>
            <br />
            <h3 className='lead'>Ingredient</h3>

            <div className='form-group'>
              <i className=''></i>
              <input
                type='text'
                placeholder='amount'
                name='amount'
                value={amount}
                onChange={(e) => onchange(e)}
              />
            </div>

            <small className='form-text'>
              Number of used measurements
            </small>

            <div className='form-group'>
              <i className=''></i>
              <input
                type='text'
                placeholder='measurement'
                name='measurement'
                value={measurement}
                onChange={(e) => onchange(e)}
              />
            </div>

            <small className='form-text'>
              Ounzes, cups, tablespoons, etc
            </small>

            <div className='form-group'>
              <i className=''></i>
              <input
                type='text'
                placeholder='name'
                name='name'
                value={name}
                onChange={(e) => onchange(e)}
              />
            </div>

            <small className='form-text'>
              Title of ingredient
            </small>
            <br />
            <h3 className='lead'>Direction</h3>

            <div className='form-group'>
              <i className=''></i>
              <input
                type='text'
                placeholder='amount'
                name='instructions'
                value={instructions}
                onChange={(e) => onchange(e)}
              />
            </div>

            <small className='form-text'>
              Describe your direction
            </small>

          </Fragment>
        )}
        <br />
        <input type='submit' className='btn' />
      </form>
      <br />
      <Link className='btn' to='/'>
        Go Back
      </Link>
    </Fragment>
  );
};
