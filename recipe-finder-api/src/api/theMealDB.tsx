export async function fetchData(query: string) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        if(!response.ok) {
            console.log(`Error ${response.status}`);
        }
        const object = await response.json();
        
        return object;
    } catch(e) {
        console.log(e);
    }
}