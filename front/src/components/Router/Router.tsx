import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectRecipesList } from '../../features/recipes/recipesSlice';

import SingleRecipe from '../SingleRecipe';
import Home from '../Home';
import Layout from '../Layout';

const RouterComponent = () => {
  const { status: recipesListStatus } = useAppSelector(selectRecipesList);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Layout loading={recipesListStatus !== 'done'}>
            <Home />
          </Layout>
        </Route>
        <Route path="/recipe/:slug">
          <Layout loading={false}>
            <SingleRecipe />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterComponent;
