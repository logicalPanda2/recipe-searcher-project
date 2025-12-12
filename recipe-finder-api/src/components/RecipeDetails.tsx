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
            className="bg-gray-100 h-screen w-screen fixed inset-0 top-0 flex flex-col md:flex-row p-4 overflow-x-hidden"
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
                className="flex flex-col w-3/4 md:w-1/5 min-w-56 my-4 md:px-4"
            >
                <p className="text-2xl font-semibold">Ingredients</p>
                {displayIngredients(recipe)}
            </div>
            <div
                className="flex flex-col w-3/4 md:w-3/5 my-4 md:px-4"
            >
                <p className="text-2xl font-semibold">Instructions</p>
                <p>{recipe.strInstructions}</p>
            </div>
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 bg-gray-50 [box-shadow:0_1px_2px_rgba(0,0,0,0.5)] focus-visible:[box-shadow:0_2px_3px_rgba(0,0,0,0.75)] focus-visible:outline-0 transition px-4 py-2 rounded-lg font-semibold"
            >
                Close
            </button>
		</div>
	);
}
