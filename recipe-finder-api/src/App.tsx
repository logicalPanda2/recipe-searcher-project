import { useEffect, useState } from "react";
import { fetchData } from "./api/theMealDB";

export default function App() {
	const [page, setPage] = useState<number>(1);
	const [searchValue, setSearchValue] = useState<string>("");
	const [recipes, setRecipes] = useState<string[]>([]);
    const [isRecipeActive, setIsRecipeActive] = useState<boolean>(false);
    const [activeRecipe, setActiveRecipe] = useState<unknown>({});

	const recipesPerPage = 3;
	const start = (page - 1) * recipesPerPage;
	const end = start + recipesPerPage;
	const visibleRecipes: string[] = recipes.slice(start, end);

	const handleNextPage = () => {
		const nextVisibleRecipes: string[] = recipes.slice(
			start + recipesPerPage,
			end + recipesPerPage,
		);
		if (nextVisibleRecipes.length !== 0) {
			setPage((p) => p + 1);
		}
	};

    const openDialogBox = (r: unknown) => {
        setIsRecipeActive(true);
        setActiveRecipe(r);
    }

    const closeDialogBox = () => {
        setIsRecipeActive(false);
        console.log(activeRecipe);
        setActiveRecipe({});
    }

	const handlePrevPage = () => {
		if (page > 1) {
			setPage((p) => p - 1);
		}
	};

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
				{
					// TODO replace any, 4 lint errors here
					visibleRecipes.length !== 0 ? (
						visibleRecipes.map((r: any) => (
							<div key={r.idMeal} onClick={() => {openDialogBox(r)}}>
                                <p>{r.strMeal}</p>
                                <img src={r.strMealThumb} alt="" width={100} height={100}/>
                            </div>
						))
					) : (
						<p>No results found</p>
					)
				}
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
                {isRecipeActive && <div onClick={closeDialogBox}>this will be the dialog box that displays recipe</div>}
			</main>
			<footer>
				API provided by (link to themealdb) design by (link to github
				logicalPanda2)
			</footer>
		</>
	);
}
