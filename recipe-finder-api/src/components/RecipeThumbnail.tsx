import type { Recipe } from "../interface/Recipe";

interface Props {
	recipe: Recipe;
	onOpen: (recipe: unknown) => void;
}

export default function RecipeThumbnail({ recipe, onOpen }: Props) {
	return (
		<div
			onClick={() => {
				onOpen(recipe);
			}}
            className="flex flex-col items-center border border-solid border-black rounded-lg p-4 w-2/3 min-w-40 sm:w-1/6 sm:min-w-48 gap-2"
		>
			<p
                className="text-xl"
            >
                {recipe.strMeal}
            </p>
			<img 
                src={recipe.strMealThumb} 
                alt="" 
                width={100} 
                height={100}
                className="w-[90%] h-[90%] rounded-lg" 
            />
		</div>
	);
}
