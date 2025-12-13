import { useEffect, useState } from "react";
import { fetchData } from "./api/theMealDB";
import type { Recipe } from "./interface/Recipe";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
	const [searchValue, setSearchValue] = useState<string>("");
	const [recipes, setRecipes] = useState<Recipe[]>([]);
	const [page, setPage] = useState<number>(1);

    async function loadRecipes(query: string) {
        const request = fetchData(query);
        request
			.then((data) => {
				if (data && typeof data === "object" && "meals" in data) {
					if (Array.isArray(data.meals)) {
						setRecipes(data.meals);
					} else {
						setRecipes([]);
						throw new Error("no results found");
					}
				}
			})
			.catch((e: unknown) => {
				console.error(e);
			});
    }

	useEffect(() => {
		loadRecipes("");
	}, []);

	useEffect(() => {
		loadRecipes(searchValue);
        setPage(1);
	}, [searchValue]);

	return (
		<>
			<Header value={searchValue} onChange={setSearchValue} />
			<Main recipes={recipes} page={page} onPageChange={setPage} />
			<Footer />
		</>
	);
}
