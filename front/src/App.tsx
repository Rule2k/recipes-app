import React, { useEffect } from 'react';
import Router from './components/Router/Router';
import { useAppDispatch } from './app/hooks';
import { fetchRecipesList } from './features/recipes/recipesSlice';
import './App.css';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRecipesList());
  }, [dispatch]);

  return <Router />;
};

export default App;
