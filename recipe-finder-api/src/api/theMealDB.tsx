export async function fetchData(query: string): Promise<unknown> {
	try {
		const response = await fetch(
			`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
		);
		if (!response.ok) {
			console.error(`Error ${response.statusText}`);
		}

		return await response.json();
	} catch (e) {
		console.error(e);
		throw e;
	}
}
