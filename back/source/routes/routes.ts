import express from "express";
import recipesList from "../controllers/recipesList";
import singleRecipe from "../controllers/singleRecipe";
const router = express.Router();

router.get("/recipes", recipesList.getRecipesList);
router.get("/recipe/:id", singleRecipe.getSingleRecipe);

export default router;
