import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectRecipesList } from '../../features/recipes/recipesSlice';
import styles from './Header.module.css';
const Header = () => {
  const recipesList = useAppSelector(selectRecipesList);

  return (
    <div className={styles.Header}>
      {recipesList.data?.map((recipe) => (
        <NavLink key={recipe.label} to={`/recipe/${recipe.id}`}>
          {recipe.label}
        </NavLink>
      ))}
      <NavLink to="/">Home</NavLink>
    </div>
  );
};

export default Header;
