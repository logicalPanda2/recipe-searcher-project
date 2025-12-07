export async function fetchData() {
    try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken");
        if(!response.ok) {
            console.log(`Error ${response.status}`);
        }
        const object = await response.json();
        
        return object;
    } catch(e) {
        console.log(e);
    }
}