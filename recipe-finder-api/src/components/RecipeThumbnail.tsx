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
		>
			<p>{recipe.strMeal}</p>
			<img src={recipe.strMealThumb} alt="" width={100} height={100} />
		</div>
	);
}
