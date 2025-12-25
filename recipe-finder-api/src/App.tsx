import { useState } from "react";
import { fetchData } from "./api/theMealDB";
import type { Recipe } from "./interface/Recipe";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import useDebounce from "./hooks/useDebounce";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

export default function App() {
	const [searchValue, setSearchValue] = useState<string>("");
    const debouncedValue = useDebounce<string>(searchValue);
	const [page, setPage] = useState<number>(1);

    async function loadRecipes(query: string): Promise<Recipe[]> {
        const data = await fetchData(query);
    
        if(!data || !(typeof data === "object") || !("meals" in data)) throw new Error("Invalid response");
        if(!Array.isArray(data.meals)) throw new Error("No results found");

        return data.meals.map((meal) => ({
            idMeal: meal.idMeal,
            strMeal: meal.strMeal,
            strInstructions: meal.strInstructions,
            strMealThumb: meal.strMealThumb,
            strYoutube: meal.strYoutube,
            strIngredient1: meal.strIngredient1,
            strIngredient2: meal.strIngredient2,
            strIngredient3: meal.strIngredient3,
            strIngredient4: meal.strIngredient4,
            strIngredient5: meal.strIngredient5,
            strIngredient6: meal.strIngredient6,
            strIngredient7: meal.strIngredient7,
            strIngredient8: meal.strIngredient8,
            strIngredient9: meal.strIngredient9,
            strIngredient10: meal.strIngredient10,
            strIngredient11: meal.strIngredient11,
            strIngredient12: meal.strIngredient12,
            strIngredient13: meal.strIngredient13,
            strIngredient14: meal.strIngredient14,
            strIngredient15: meal.strIngredient15,
            strIngredient16: meal.strIngredient16,
            strIngredient17: meal.strIngredient17,
            strIngredient18: meal.strIngredient18,
            strIngredient19: meal.strIngredient19,
            strIngredient20: meal.strIngredient20,
            strMeasure1: meal.strMeasure1,
            strMeasure2: meal.strMeasure2,
            strMeasure3: meal.strMeasure3,
            strMeasure4: meal.strMeasure4,
            strMeasure5: meal.strMeasure5,
            strMeasure6: meal.strMeasure6,
            strMeasure7: meal.strMeasure7,
            strMeasure8: meal.strMeasure8,
            strMeasure9: meal.strMeasure9,
            strMeasure10: meal.strMeasure10,
            strMeasure11: meal.strMeasure11,
            strMeasure12: meal.strMeasure12,
            strMeasure13: meal.strMeasure13,
            strMeasure14: meal.strMeasure14,
            strMeasure15: meal.strMeasure15,
            strMeasure16: meal.strMeasure16,
            strMeasure17: meal.strMeasure17,
            strMeasure18: meal.strMeasure18,
            strMeasure19: meal.strMeasure19,
            strMeasure20: meal.strMeasure20,
        }));
    }

	const {
        data: recipes = [],
        isFetching,
        isError,
        error,
    } = useQuery<Recipe[]>({
        queryKey: ["recipes", debouncedValue],
        queryFn: () => loadRecipes(debouncedValue),
        placeholderData: keepPreviousData,
    });

	return (
		<>
			<Header value={searchValue} onChange={setSearchValue} />
			<Main recipes={!isFetching ? recipes : []} page={page} errorMsg={isError ? error.message : ""} isLoading={isFetching} onPageChange={setPage}/>
			<Footer />
		</>
	);
}
