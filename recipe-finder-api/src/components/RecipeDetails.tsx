import type { JSX } from "react";
import type { Recipe } from "../interface/Recipe";

interface Props {
	recipe: Recipe;
	displayIngredients: (recipe: Recipe) => JSX.Element;
	onClose: () => void;
}

export default function RecipeDetails({
	recipe,
	displayIngredients,
	onClose,
}: Props) {
	return (
		<div>
			<p>{recipe.strMeal}</p>
			<img src={recipe.strMealThumb} alt="" width={100} height={100} />
			<p>Ingredients</p>
			<ul>{displayIngredients(recipe)}</ul>
			<p>Instructions</p>
			<p>{recipe.strInstructions}</p>
			<button onClick={onClose}>Close</button>
		</div>
	);
}
