import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();
    // 1) Loading Recipe

    await model.loadRecipe(id);
    const { recipe } = model.state;

    // 2) Rendering

    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
  }
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
