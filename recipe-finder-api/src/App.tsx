import { useEffect, useState } from "react";
import { fetchData } from "./api/theMealDB";

function App() {
    const [page, setPage] = useState<number>(1);
    const [searchValue, setSearchValue] = useState<string>("");
    const [recipes, setRecipes] = useState<any>({
        recipe1Name: "",
        recipe2Name: "",
        recipe3Name: "",
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
        const indices: any = deriveRecipeIndex(page, 3);
        const request: any = fetchData(searchValue);
        request
        .then((data: any) => {
            if(!data["meals"]) {
                throw new Error("no results found");
            }
            if(!(data["meals"][`${indices[0]}`] && data["meals"][`${indices[1]}`] && data["meals"][`${indices[2]}`])) {
                throw new Error("not enough results: placeholder");
            }
            setRecipes(() => ({
                recipe1Name: data["meals"][`${indices[0]}`]["strMeal"],
                recipe2Name: data["meals"][`${indices[1]}`]["strMeal"],
                recipe3Name: data["meals"][`${indices[2]}`]["strMeal"],
            }));
        })
        .catch((error: any) => {
            console.log(error);
        })
    }, [page, searchValue]);

    //DEBUGGING LOG
    useEffect(() => {
        console.log(searchValue);
        console.log(recipes);
    })

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
                <header>
                    <h2>recommended chicken meals</h2>
                </header>
                <div>{recipes["recipe1Name"]} </div>
                <div>{recipes["recipe2Name"]}</div>
                <div>{recipes["recipe3Name"]}</div>
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
