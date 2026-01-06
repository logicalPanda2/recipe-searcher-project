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
            className="bg-gray-100 h-screen w-screen fixed inset-0 top-0 flex flex-col md:flex-row p-8 py-12 overflow-x-hidden"
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
                    alt={recipe.strMeal}
                    width={100} 
                    height={100} 
                    className="rounded-lg w-50 h-50"
                />
            </div>
            <div
                className="flex flex-col w-3/4 md:w-1/5 min-w-56 md:px-4"
            >
                <p className="text-2xl font-semibold">Ingredients</p>
                {displayIngredients(recipe)}
            </div>
            <div
                className="flex flex-col w-3/4 md:w-3/5 md:px-4"
            >
                <p className="text-2xl font-semibold">Instructions</p>
                <p className="whitespace-pre-line pb-12">{recipe.strInstructions}</p>
            </div>
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 hover:bg-gray-300 focus-visible:bg-gray-300 focus-visible:outline-0 transition px-3 py-[0.475rem] rounded-full transform-[scaleX(1.25)]"
            >
                X
            </button>
		</div>
	);
}
