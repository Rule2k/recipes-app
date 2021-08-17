import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchSingleRecipe,
  selectCurrentRecipe,
} from '../../features/recipes/recipesSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import styles from './SingleRecipe.module.css';
import Loader from '../Loader';

const SingleRecipe = () => {
  let { slug }: { slug: string } = useParams();
  const dispatch = useAppDispatch();
  const { data, status } = useAppSelector(selectCurrentRecipe);
  const loading = status !== 'done';
  useEffect(() => {
    dispatch(fetchSingleRecipe(slug));
  }, [slug, dispatch]);

  return loading ? (
    <Loader failed={status === 'failed'} />
  ) : (
    <div className={styles.SingleRecipe}>
      <div className={styles.RecipeLabel}>{data?.label}</div>
      <div className={styles.Ingredients}>
        {data?.ingredients.map((ingredient) => (
          <div key={ingredient.label} className={styles.ChildGroup}>
            <div>{ingredient.label}</div>
            <div>{ingredient.quantity}</div>
          </div>
        ))}
      </div>
      <div className={styles.Steps}>
        {data?.steps.map((step) => (
          <div key={step.label} className={styles.ChildGroup}>
            <div>{step.label}</div>
            <div>{step.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleRecipe;
