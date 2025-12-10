import { useEffect, useState } from "react";
import { fetchData } from "./api/theMealDB";
import Header from "./components/Header";
import type { Recipe } from "./interface/Recipe";
import { isRecipe } from "./interface/Recipe";
import Pagination from "./components/Pagination";

export default function App() {
	const [page, setPage] = useState<number>(1);
	const [searchValue, setSearchValue] = useState<string>("");
	const [recipes, setRecipes] = useState<Recipe[]>([]);
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
			setPage((p) => p + 1);
		}
	};

	const openDialogBox = (recipe: unknown) => {
		setActiveRecipe(recipe);
	};

	const closeDialogBox = () => {
		setActiveRecipe({});
	};

	const handlePrevPage = () => {
		if (page > 1) {
			setPage((p) => p - 1);
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
        const ingredients = ingredientsUnfiltered.filter((i: string) => { return i.trim() !== ":" });
        return (
            <ul>
                {ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                ))}
            </ul>
        );
    }

	useEffect(() => {
		const request = fetchData("");
		request
        .then((data) => {
            if (data && typeof data === "object" && "meals" in data) {
                if (Array.isArray(data.meals)) {
                    setRecipes(data.meals);
                }
            }
        })
        .catch((e: unknown) => {
            console.error(e);
        });
	}, []);

	useEffect(() => {
		const request = fetchData(searchValue);
		request
        .then((data) => {
            if (data && typeof data === "object" && "meals" in data) {
                if (Array.isArray(data.meals)) {
                    setPage(1);
                    setRecipes(data.meals);
                } else {
                    setRecipes([]);
                    throw new Error("no results found");
                }
            }
        })
        .catch((error: unknown) => {
            console.error(error);
        });
	}, [searchValue]);

	return (
		<>
			<Header value={searchValue} onChange={setSearchValue}/>
			<main>
				{visibleRecipes.length !== 0 ? (
					visibleRecipes.map((r: Recipe) => (
						<div
							key={r.idMeal}
							onClick={() => {
								openDialogBox(r);
							}}
						>
							<p>{r.strMeal}</p>
							<img
								src={r.strMealThumb}
								alt=""
								width={100}
								height={100}
							/>
						</div>
					))
				) : (
					<p>No results found</p>
				)}
				<Pagination page={page} onPrevious={handlePrevPage} onNext={handleNextPage}/>
				{isRecipe(activeRecipe) && (
					<div>
                        <p>{activeRecipe.strMeal}</p>
                        <img
                            src={activeRecipe.strMealThumb}
                            alt=""
                            width={100}
                            height={100}
                        />
                        <p>Ingredients</p>
                        <ul>
                            { displayIngredients(activeRecipe) }
                        </ul>
                        <p>Instructions</p>
                        <p>{activeRecipe.strInstructions}</p>
                        <button onClick={closeDialogBox}>Close</button>
					</div>
				)}
			</main>
			<footer>
				API provided by (link to themealdb) design by (link to github
				logicalPanda2)
			</footer>
		</>
	);
}
