import { Request, Response, NextFunction } from "express";
import recipesList from "../responses/recipesList.json";

const getRecipesList = async (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  return res.status(200).json(recipesList);
};

export default { getRecipesList };
