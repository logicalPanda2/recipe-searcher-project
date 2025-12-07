import { useEffect, useState } from "react";
import { fetchData } from "./api/theMealDB";

export default function App() {
    const [page, setPage] = useState<number>(1);
    const [searchValue, setSearchValue] = useState<string>("");
    const [recipes, setRecipes] = useState<any>([]);

    const recipesPerPage = 3;
    const start = (page - 1) * recipesPerPage;
    const end = start + recipesPerPage;
    const visibleRecipes = recipes.slice(start, end);

    const handleNextPage = () => {
        const nextVisibleRecipes = recipes.slice(start + recipesPerPage, end + recipesPerPage);
        if(nextVisibleRecipes.length !== 0) {
            setPage(p => p + 1);
        }
    }

    const handlePrevPage = () => {
        page > 1 ? setPage(p => p - 1) : page;
    }

    useEffect(() => {
        const request: any = fetchData(searchValue);
        request
        .then((data: any) => {
            setRecipes(() => (data.meals));
        })
        .catch((error: any) => {
            console.log(error);
        })
    }, []);

    useEffect(() => {
        const request: any = fetchData(searchValue);
        request
        .then((data: any) => {
            if(!data.meals) {
                throw new Error("no results found");
            }
            setPage(1);
            setRecipes(() => (data.meals));
        })
        .catch((error: any) => {
            console.log(error);
        })
    }, [searchValue]);

    //DEBUGGING LOG
    //useEffect(() => {
    //    console.log(visibleRecipes);
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
                {visibleRecipes.map((r: any) => <div key={r.idMeal}>{r.strMeal}</div>)}
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