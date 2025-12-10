import { useEffect, useState } from "react";
import { fetchData } from "./api/theMealDB";

export default function App() {
	const [page, setPage] = useState<number>(1);
	const [searchValue, setSearchValue] = useState<string>("");
	const [recipes, setRecipes] = useState<Recipe[]>([]);
	const [activeRecipe, setActiveRecipe] = useState<unknown>({});

	interface Recipe {
		idMeal: string;
		strMeal: string;
		strInstructions: string;
		strMealThumb: string;
		strYoutube: string;
		strIngredient1: string;
		strIngredient2: string;
		strIngredient3: string;
		strIngredient4: string;
		strIngredient5: string;
		strIngredient6: string;
		strIngredient7: string;
		strIngredient8: string;
		strIngredient9: string;
		strIngredient10: string;
		strIngredient11: string;
		strIngredient12: string;
		strIngredient13: string;
		strIngredient14: string;
		strIngredient15: string;
		strIngredient16: string;
		strIngredient17: string;
		strIngredient18: string;
		strIngredient19: string;
		strIngredient20: string;
		strMeasure1: string;
		strMeasure2: string;
		strMeasure3: string;
		strMeasure4: string;
		strMeasure5: string;
		strMeasure6: string;
		strMeasure7: string;
		strMeasure8: string;
		strMeasure9: string;
		strMeasure10: string;
		strMeasure11: string;
		strMeasure12: string;
		strMeasure13: string;
		strMeasure14: string;
		strMeasure15: string;
		strMeasure16: string;
		strMeasure17: string;
		strMeasure18: string;
		strMeasure19: string;
		strMeasure20: string;
	}

	function isRecipe(value: unknown): value is Recipe {
		if (
			typeof value === "object" &&
			value !== null &&
			"idMeal" in value &&
			typeof (value as any).idMeal === "string" &&
			"strMeal" in value &&
			typeof (value as any).strMeal === "string" &&
			"strInstructions" in value &&
			typeof (value as any).strInstructions === "string" &&
			"strMealThumb" in value &&
			typeof (value as any).strMealThumb === "string" &&
			"strYoutube" in value &&
			typeof (value as any).strYoutube === "string" &&
			"strIngredient1" in value &&
			typeof (value as any).strIngredient1 === "string" &&
			"strIngredient2" in value &&
			typeof (value as any).strIngredient2 === "string" &&
			"strIngredient3" in value &&
			typeof (value as any).strIngredient3 === "string" &&
			"strIngredient4" in value &&
			typeof (value as any).strIngredient4 === "string" &&
			"strIngredient5" in value &&
			typeof (value as any).strIngredient5 === "string" &&
			"strIngredient6" in value &&
			typeof (value as any).strIngredient6 === "string" &&
			"strIngredient7" in value &&
			typeof (value as any).strIngredient7 === "string" &&
			"strIngredient8" in value &&
			typeof (value as any).strIngredient8 === "string" &&
			"strIngredient9" in value &&
			typeof (value as any).strIngredient9 === "string" &&
			"strIngredient10" in value &&
			typeof (value as any).strIngredient10 === "string" &&
			"strIngredient11" in value &&
			typeof (value as any).strIngredient11 === "string" &&
			"strIngredient12" in value &&
			typeof (value as any).strIngredient12 === "string" &&
			"strIngredient13" in value &&
			typeof (value as any).strIngredient13 === "string" &&
			"strIngredient14" in value &&
			typeof (value as any).strIngredient14 === "string" &&
			"strIngredient15" in value &&
			typeof (value as any).strIngredient15 === "string" &&
			"strIngredient16" in value &&
			typeof (value as any).strIngredient16 === "string" &&
			"strIngredient17" in value &&
			typeof (value as any).strIngredient17 === "string" &&
			"strIngredient18" in value &&
			typeof (value as any).strIngredient18 === "string" &&
			"strIngredient19" in value &&
			typeof (value as any).strIngredient19 === "string" &&
			"strIngredient20" in value &&
			typeof (value as any).strIngredient20 === "string" &&
			"strMeasure1" in value &&
			typeof (value as any).strMeasure1 === "string" &&
			"strMeasure2" in value &&
			typeof (value as any).strMeasure2 === "string" &&
			"strMeasure3" in value &&
			typeof (value as any).strMeasure3 === "string" &&
			"strMeasure4" in value &&
			typeof (value as any).strMeasure4 === "string" &&
			"strMeasure5" in value &&
			typeof (value as any).strMeasure5 === "string" &&
			"strMeasure6" in value &&
			typeof (value as any).strMeasure6 === "string" &&
			"strMeasure7" in value &&
			typeof (value as any).strMeasure7 === "string" &&
			"strMeasure8" in value &&
			typeof (value as any).strMeasure8 === "string" &&
			"strMeasure9" in value &&
			typeof (value as any).strMeasure9 === "string" &&
			"strMeasure10" in value &&
			typeof (value as any).strMeasure10 === "string" &&
			"strMeasure11" in value &&
			typeof (value as any).strMeasure11 === "string" &&
			"strMeasure12" in value &&
			typeof (value as any).strMeasure12 === "string" &&
			"strMeasure13" in value &&
			typeof (value as any).strMeasure13 === "string" &&
			"strMeasure14" in value &&
			typeof (value as any).strMeasure14 === "string" &&
			"strMeasure15" in value &&
			typeof (value as any).strMeasure15 === "string" &&
			"strMeasure16" in value &&
			typeof (value as any).strMeasure16 === "string" &&
			"strMeasure17" in value &&
			typeof (value as any).strMeasure17 === "string" &&
			"strMeasure18" in value &&
			typeof (value as any).strMeasure18 === "string" &&
			"strMeasure19" in value &&
			typeof (value as any).strMeasure19 === "string" &&
			"strMeasure20" in value &&
			typeof (value as any).strMeasure20 === "string"
		) {
			return true;
		}
		return false;
	}

	const recipesPerPage = 3;
	const start = (page - 1) * recipesPerPage;
	const end = start + recipesPerPage;
	const visibleRecipes: Recipe[] = recipes.slice(start, end);

	const handleNextPage = () => {
		const nextVisibleRecipes: Recipe[] = recipes.slice(
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
					}
				} else if (
					data &&
					typeof data === "object" &&
					!("meals" in data)
				) {
					setRecipes([]);
					throw new Error("no results found");
				}
			})
			.catch((error: unknown) => {
				console.error(error);
			});
	}, [searchValue]);

	return (
		<>
			<header>
				<h1>Recipe Searcher</h1>
				<label htmlFor="searchField">Search</label>
				<input
					type="search"
					name="query"
					id="searchField"
					className="border border-solid border-black"
					value={searchValue}
					onChange={(e) => {
						setSearchValue(e.target.value);
					}}
				/>
			</header>
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
				<button
					onClick={handlePrevPage}
					className="border border-solid border-blue-500"
				>
					Previous
				</button>
				<p>{page}</p>
				<button
					onClick={handleNextPage}
					className="border border-solid border-blue-500"
				>
					Next
				</button>
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
