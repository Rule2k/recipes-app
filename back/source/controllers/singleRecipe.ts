import { Request, Response, NextFunction } from "express";
import singleRecipe from "../responses/recipes.json";

interface singleRecipeType {
  id: number
  label: string
}
const getSingleRecipe = async (req: Request, res: Response, _next: NextFunction) => {
  const id = req.params.id
  const result = singleRecipe.find((singleRecipe: singleRecipeType) => singleRecipe.id.toString() === id)
  return res.status(200).json(result);
};

export default { getSingleRecipe };
