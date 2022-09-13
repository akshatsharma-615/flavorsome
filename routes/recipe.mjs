import { Router } from "express";
import { addRecipe, getAllRecipes, getRecipe } from "../controllers/recipe.mjs";
import auth from "../middleware/auth.mjs";

const router = Router();

router.get("/", getAllRecipes);
router.get("/:id", getRecipe);
router.post("/add", auth, addRecipe);

export default router;