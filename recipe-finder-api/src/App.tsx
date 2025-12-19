import { useEffect, useState } from "react";
import { fetchData } from "./api/theMealDB";
import type { Recipe } from "./interface/Recipe";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import useDebounce from "./hooks/useDebounce";

export default function App() {
	const [searchValue, setSearchValue] = useState<string>("");
    const debouncedValue = useDebounce<string>(searchValue);
	const [recipes, setRecipes] = useState<Recipe[]>([]);
	const [page, setPage] = useState<number>(1);
    const [fetchError, setFetchError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    async function loadRecipes(query: string) {
        const request = fetchData(query);
        request
			.then((data) => {
                setLoading(false);
				if (data && typeof data === "object" && "meals" in data) {
					if (Array.isArray(data.meals)) {
						setRecipes(data.meals);
					} else {
						setRecipes([]);
						throw new Error("No results found");
					}
				}
			})
			.catch((e: unknown) => {
				console.error(e);
                setLoading(false);
                if(typeof e === "object" && e !== null && "message" in e && typeof e.message === "string") {
                    setFetchError(e.message);
                }
			});
    }

	useEffect(() => {
		loadRecipes("");
	}, []);

	useEffect(() => {
		loadRecipes(debouncedValue);
        setPage(1);
	}, [debouncedValue]);

	return (
		<>
			<Header value={searchValue} onChange={setSearchValue} />
			<Main recipes={recipes} page={page} errorMsg={fetchError} isLoading={loading} onPageChange={setPage}/>
			<Footer />
		</>
	);
}
