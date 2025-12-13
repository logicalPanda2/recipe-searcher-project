import { useEffect, useState } from "react";
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
    const [nextBtnDisabled, setNextBtnDisabled] = useState<boolean>(false);
    const [prevBtnDisabled, setPrevBtnDisabled] = useState<boolean>(true);

	const recipesPerPage = 3;
	const start = (page - 1) * recipesPerPage;
	const end = start + recipesPerPage;
	const visibleRecipes: Recipe[] = recipes.slice(start, end);
    const nextVisibleRecipes = recipes.slice(
			start + recipesPerPage,
			end + recipesPerPage,
		);

    useEffect(() => {
        if(nextVisibleRecipes.length === 0) {
            setNextBtnDisabled(true);
        } else {
            setNextBtnDisabled(false);
        }

        if(page === 1) {
            setPrevBtnDisabled(true);
        } else {
            setPrevBtnDisabled(false);
        }
    }, [recipes, page]);

	const handleNextPage = () => {
		if(!nextBtnDisabled) {
            onPageChange(p => p + 1);
        }
	};

	const openDialogBox = (recipe: unknown) => {
        const root = document.getElementById("root");
        if(!root) {
            throw new Error("root not found");
        }
		setActiveRecipe(recipe);
        [...root.children].forEach((element) => {
            element.setAttribute("inert", "");
        })
	};

	const closeDialogBox = () => {
        const root = document.getElementById("root");
        if(!root) {
            throw new Error("root not found");
        }

        setActiveRecipe({});
        [...root.children].forEach((element) => {
            element.removeAttribute("inert");
        })
	};

	const handlePrevPage = () => {
		if (page > 1) {
			onPageChange((p) => p - 1);
		}
	};

	const displayIngredients = (recipe: Recipe) => {
		const properties = Object.entries(recipe);
        const strIngredients = properties.filter(([key, value]) => key.startsWith("strIngredient") && value.trim());
        const strMeasures = properties.filter(([key, value]) => key.startsWith("strMeasure") && value.trim());
        const ingredients = strIngredients.map(([, value], index) => {
            return `${value}: ${strMeasures[index][1]}`;
        })

		return (
			<ul>
				{ingredients.map((ingredient, i) => (
					<li key={i}>{ingredient}</li>
				))}
			</ul>
		);
	};
    
	return (
        <>
		<main>
            <div
                className="flex sm:flex-row flex-col items-center justify-evenly my-4 gap-4 min-h-58"
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
                    <p className="text-xl">No results found</p>
                )}
            </div>
			<Pagination
				page={page}
                nextDisabled={nextBtnDisabled}
                prevDisabled={prevBtnDisabled}
				onPrevious={handlePrevPage}
				onNext={handleNextPage}
			/>
		</main>
        {isRecipe(activeRecipe) && (
            <div>
                <RecipeDetails
                    recipe={activeRecipe}
                    displayIngredients={displayIngredients}
                    onClose={closeDialogBox}
                />
            </div>
        )}
        </>
	);
}
