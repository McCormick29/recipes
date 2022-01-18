import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Recipes } from './components/Recipes';
import { AddRecipe } from './components/AddRecipe';
import RecipeId from './components/RecipeId';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <section className='container'>
          <Routes>
            <Route path='/' element={<Recipes />} />
            <Route path='/recipeId/:uuid' element={<RecipeId />} />
            <Route exact path='/addrecipe' element={<AddRecipe />} />
          </Routes>
        </section>
      </Fragment>
    </Router>
  );
}

export default App;
