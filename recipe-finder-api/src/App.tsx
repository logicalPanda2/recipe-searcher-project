import { useEffect, useState } from "react";
import { fetchData } from "./api/theMealDB";

export default function App() {
    const [page, setPage] = useState<number>(1);
    const [searchValue, setSearchValue] = useState<string>("");
    const [recipes, setRecipes] = useState<any>({});
    const [displayedRecipes, setDisplayedRecipes] = useState<any>({
        0: {},
        1: {},
        2: {},
    });

    const handleNextPage = () => {
        page < 5 ? setPage(p => p + 1) : page;
    }

    const handlePrevPage = () => {
        page > 1 ? setPage(p => p - 1) : page;
    }

    const deriveRecipeIndex = (page: number, n: number) => {
        const arr: any = [];
        const max: number = page * n;
        const min: number = page * n - n;
        for(let i = min; i < max; i++) {
            arr.push(i);
        }
        return arr;
    }

    useEffect(() => {
        const request: any = fetchData(searchValue);
        request
        .then((data: any) => {
            setRecipes(() => (data["meals"]));
        })
        .catch((error: any) => {
            console.log(error);
        })
    }, []);

    useEffect(() => {
        const request: any = fetchData(searchValue);
        request
        .then((data: any) => {
            if(!data["meals"]) {
                throw new Error("no results found");
            }
            setPage(1);
            setRecipes(() => (data["meals"]));
        })
        .catch((error: any) => {
            console.log(error);
        })
    }, [searchValue]);

    useEffect(() => {
        const indices: any = deriveRecipeIndex(page, 3);
        setDisplayedRecipes(() => ({
            0: recipes[indices[0]],
            1: recipes[indices[1]],
            2: recipes[indices[2]],
        }));
    }, [page, recipes]);

    //DEBUGGING LOG
    //useEffect(() => {
    //    console.log("from debugging");
    //    const indices: any = deriveRecipeIndex(page, 3);
    //    console.log(recipes[`${indices[0]}`]);
    //    console.log(displayedRecipes);
    //})

    return (
        <>
            <header>
                <h1>Recipe Searcher</h1>
                <label 
                htmlFor="searchField"
                >
                    Search
                </label>
                <input 
                type="search" 
                name="query" 
                id="searchField" 
                className="border border-solid border-black"
                value={searchValue}
                onChange={(e) => {setSearchValue(e.target.value)}}
                />
            </header>
            <main>
                {displayedRecipes["0"] && <div>{displayedRecipes["0"]["strMeal"]}</div>}
                {displayedRecipes["1"] && <div>{displayedRecipes["1"]["strMeal"]}</div>}
                {displayedRecipes["2"] && <div>{displayedRecipes["2"]["strMeal"]}</div>}
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
            </main>
            <footer>
                API provided by (link to themealdb)
                design by (link to github logicalPanda2)
            </footer>
        </>
    );
}