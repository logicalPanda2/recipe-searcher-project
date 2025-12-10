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
		<div
            className="absolute h-screen w-screen top-0 bg-white flex flex-col md:flex-row p-4 overflow-x-hidden"
        >
            <div
                className="flex flex-col w-1/5 pr-4 mb-4 min-w-54"
            >
                <p
                    className="text-3xl font-semibold mb-4"
                >
                    {recipe.strMeal}
                </p>
                <img 
                    src={recipe.strMealThumb} 
                    alt="" 
                    width={100} 
                    height={100} 
                    className="rounded-lg w-50 h-50"
                />
            </div>
            <div
                className="flex flex-col w-3/4 md:w-1/5 min-w-56 mb-4 md:px-4"
            >
                <p className="text-2xl font-semibold">Ingredients</p>
                <ul>{displayIngredients(recipe)}</ul>
            </div>
            <div
                className="flex flex-col w-3/4 md:w-3/5 md:px-4"
            >
                <p className="text-2xl font-semibold">Instructions</p>
                <p>{recipe.strInstructions}</p>
            </div>
            <button 
                onClick={onClose}
                className="border border-solid border-black px-4 py-2 h-12 rounded-lg self-end font-semibold"
            >
                Close
            </button>
		</div>
	);
}
