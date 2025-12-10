import { useState } from "react";
import type { Recipe } from "../interface/Recipe";
import { isRecipe } from "../interface/Recipe";
import Pagination from "./Pagination";
import RecipeDetails from "./RecipeDetails";
import RecipeThumbnail from "./RecipeThumbnail";

interface Props {
	recipes: Recipe[];
	page: number;
	onPageChange: React.Dispatch<React.SetStateAction<number>>;
}

export default function Main({ recipes, page, onPageChange }: Props) {
	const [activeRecipe, setActiveRecipe] = useState<unknown>({});

	const recipesPerPage = 3;
	const start = (page - 1) * recipesPerPage;
	const end = start + recipesPerPage;
	const visibleRecipes: Recipe[] = recipes.slice(start, end);

	const handleNextPage = () => {
		const nextVisibleRecipes = recipes.slice(
			start + recipesPerPage,
			end + recipesPerPage,
		);
		if (nextVisibleRecipes.length !== 0) {
			onPageChange((p) => p + 1);
		}
	};

	const openDialogBox = (recipe: unknown) => {
		setActiveRecipe(recipe);
        window.scrollTo({top: 0});
	};

	const closeDialogBox = () => {
		setActiveRecipe({});
	};

	const handlePrevPage = () => {
		if (page > 1) {
			onPageChange((p) => p - 1);
		}
	};

	const displayIngredients = (recipe: Recipe) => {
		const ingredientsUnfiltered = [
			`${recipe.strIngredient1}: ${recipe.strMeasure1}`,
			`${recipe.strIngredient2}: ${recipe.strMeasure2}`,
			`${recipe.strIngredient3}: ${recipe.strMeasure3}`,
			`${recipe.strIngredient4}: ${recipe.strMeasure4}`,
			`${recipe.strIngredient5}: ${recipe.strMeasure5}`,
			`${recipe.strIngredient6}: ${recipe.strMeasure6}`,
			`${recipe.strIngredient7}: ${recipe.strMeasure7}`,
			`${recipe.strIngredient8}: ${recipe.strMeasure8}`,
			`${recipe.strIngredient9}: ${recipe.strMeasure9}`,
			`${recipe.strIngredient10}: ${recipe.strMeasure10}`,
			`${recipe.strIngredient12}: ${recipe.strMeasure12}`,
			`${recipe.strIngredient13}: ${recipe.strMeasure13}`,
			`${recipe.strIngredient14}: ${recipe.strMeasure14}`,
			`${recipe.strIngredient15}: ${recipe.strMeasure15}`,
			`${recipe.strIngredient16}: ${recipe.strMeasure16}`,
			`${recipe.strIngredient17}: ${recipe.strMeasure17}`,
			`${recipe.strIngredient18}: ${recipe.strMeasure18}`,
			`${recipe.strIngredient19}: ${recipe.strMeasure19}`,
			`${recipe.strIngredient20}: ${recipe.strMeasure20}`,
		];
		const ingredients = ingredientsUnfiltered.filter((i: string) => {
			return i.trim() !== ":";
		});
		return (
			<ul>
				{ingredients.map((ingredient, i) => (
					<li key={i}>{ingredient}</li>
				))}
			</ul>
		);
	};
	return (
		<main>
            <div
                className="flex sm:flex-row flex-col items-center justify-evenly my-4 gap-4"
            >
                {visibleRecipes.length !== 0 ? (
                    visibleRecipes.map((r: Recipe) => (
                        <RecipeThumbnail
                            recipe={r}
                            key={r.idMeal}
                            onOpen={openDialogBox}
                        />
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </div>
			<Pagination
				page={page}
				onPrevious={handlePrevPage}
				onNext={handleNextPage}
			/>
			{isRecipe(activeRecipe) && (
				<RecipeDetails
					recipe={activeRecipe}
					displayIngredients={displayIngredients}
					onClose={closeDialogBox}
				/>
			)}
		</main>
	);
}
