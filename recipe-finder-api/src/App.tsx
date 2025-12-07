import { useEffect, useRef, useState } from "react";
import { fetchData } from "./api/theMealDB";

function App() {
    const [page, setPage] = useState<number>(1);
    const recipe1 = useRef<any>("");
    const recipe2 = useRef<any>("");
    const recipe3 = useRef<any>("");

    const handleNextPage = () => {
        page < 5 ? setPage(p => p + 1) : page;
    }

    const handlePrevPage = () => {
        page > 1 ? setPage(p => p - 1) : page;
    }

    useEffect(() => {
        const request: any = fetchData();
        request
        .then((data: any) => {    
            recipe1.current.textContent = data["meals"]["0"]["strMeal"];
            recipe2.current.textContent = data["meals"]["1"]["strMeal"];
            recipe3.current.textContent = data["meals"]["2"]["strMeal"];
        })
        .catch((error: any) => {
            console.log(error);
        })
    }, [page])

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
                />
            </header>
            <main>
                <header>
                    <h2>recommended chicken meals</h2>
                </header>
                <div
                ref={recipe1}
                >

                </div>
                <div
                ref={recipe2}
                >

                </div>
                <div
                ref={recipe3}
                >

                </div>
                <button 
                onClick={handlePrevPage}
                className="border border-solid border-blue-500"
                >
                    Previous
                </button>
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
