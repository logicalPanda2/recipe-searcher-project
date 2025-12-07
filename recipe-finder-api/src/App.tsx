import { useEffect, useState } from "react";
import { fetchData } from "./api/theMealDB";

function App() {
    const [page, setPage] = useState<number>(1);
    const [searchValue, setSearchValue] = useState<string>("");
    const [recipes, setRecipes] = useState<any>({});
    const [displayedRecipes, setDisplayedRecipes] = useState<any>({
        recipe0: {},
        recipe1: {},
        recipe2: {},
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
            setRecipes(() => ({...data["meals"]}));
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
            setRecipes(() => ({...data["meals"]}));
        })
        .catch((error: any) => {
            console.log(error);
        })
    }, [searchValue]);

    useEffect(() => {
        const indices: any = deriveRecipeIndex(page, 3);
        setDisplayedRecipes(() => ({
            recipe0: recipes[`${indices[0]}`],
            recipe1: recipes[`${indices[1]}`],
            recipe2: recipes[`${indices[2]}`],
        }));
    }, [page]);

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
                {displayedRecipes["recipe0"] && <div>{displayedRecipes["recipe0"]["strMeal"]}</div>}
                {displayedRecipes["recipe1"] && <div>{displayedRecipes["recipe1"]["strMeal"]}</div>}
                {displayedRecipes["recipe2"] && <div>{displayedRecipes["recipe2"]["strMeal"]}</div>}
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

export default App;
