import type { Recipe } from "../interface/Recipe";

interface Props {
	recipe: Recipe;
	onOpen: (recipe: unknown) => void;
}

export default function RecipeThumbnail({ recipe, onOpen }: Props) {
	return (
		<button
			onClick={() => {
				onOpen(recipe);
			}}
            className="flex flex-col items-center bg-gray-100 [box-shadow:0_1px_2px_rgba(0,0,0,0.5)] rounded-lg p-4 w-2/3 min-w-40 sm:w-1/6 sm:min-w-48 gap-2 hover:bg-gray-50/90 focus-visible:bg-gray-50/90 focus-visible:[box-shadow:0_2px_4px_rgba(0,0,0,0.75)] focus-visible:outline-0 transition cursor-pointer"
		>
			<p
                className="text-xl"
            >
                {recipe.strMeal}
            </p>
			<img 
                src={recipe.strMealThumb} 
                alt={recipe.strMeal}
                width={100} 
                height={100}
                className="w-[90%] h-[90%] rounded-lg" 
            />
		</button>
	);
}
