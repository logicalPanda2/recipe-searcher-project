export interface Recipe {
		idMeal: string;
		strMeal: string;
		strInstructions: string;
		strMealThumb: string;
		strYoutube: string;
		strIngredient1: string;
		strIngredient2: string;
		strIngredient3: string;
		strIngredient4: string;
		strIngredient5: string;
		strIngredient6: string;
		strIngredient7: string;
		strIngredient8: string;
		strIngredient9: string;
		strIngredient10: string;
		strIngredient11: string;
		strIngredient12: string;
		strIngredient13: string;
		strIngredient14: string;
		strIngredient15: string;
		strIngredient16: string;
		strIngredient17: string;
		strIngredient18: string;
		strIngredient19: string;
		strIngredient20: string;
		strMeasure1: string;
		strMeasure2: string;
		strMeasure3: string;
		strMeasure4: string;
		strMeasure5: string;
		strMeasure6: string;
		strMeasure7: string;
		strMeasure8: string;
		strMeasure9: string;
		strMeasure10: string;
		strMeasure11: string;
		strMeasure12: string;
		strMeasure13: string;
		strMeasure14: string;
		strMeasure15: string;
		strMeasure16: string;
		strMeasure17: string;
		strMeasure18: string;
		strMeasure19: string;
		strMeasure20: string;
	}

export	function isRecipe(value: unknown): value is Recipe {
		if (
			typeof value === "object" &&
			value !== null &&
			"idMeal" in value &&
			typeof (value as Record<string, unknown>).idMeal === "string" &&
			"strMeal" in value &&
			typeof (value as Record<string, unknown>).strMeal === "string" &&
			"strInstructions" in value &&
			typeof (value as Record<string, unknown>).strInstructions === "string" &&
			"strMealThumb" in value &&
			typeof (value as Record<string, unknown>).strMealThumb === "string" &&
			"strYoutube" in value &&
			typeof (value as Record<string, unknown>).strYoutube === "string" &&
			"strIngredient1" in value &&
			typeof (value as Record<string, unknown>).strIngredient1 === "string" &&
			"strIngredient2" in value &&
			typeof (value as Record<string, unknown>).strIngredient2 === "string" &&
			"strIngredient3" in value &&
			typeof (value as Record<string, unknown>).strIngredient3 === "string" &&
			"strIngredient4" in value &&
			typeof (value as Record<string, unknown>).strIngredient4 === "string" &&
			"strIngredient5" in value &&
			typeof (value as Record<string, unknown>).strIngredient5 === "string" &&
			"strIngredient6" in value &&
			typeof (value as Record<string, unknown>).strIngredient6 === "string" &&
			"strIngredient7" in value &&
			typeof (value as Record<string, unknown>).strIngredient7 === "string" &&
			"strIngredient8" in value &&
			typeof (value as Record<string, unknown>).strIngredient8 === "string" &&
			"strIngredient9" in value &&
			typeof (value as Record<string, unknown>).strIngredient9 === "string" &&
			"strIngredient10" in value &&
			typeof (value as Record<string, unknown>).strIngredient10 === "string" &&
			"strIngredient11" in value &&
			typeof (value as Record<string, unknown>).strIngredient11 === "string" &&
			"strIngredient12" in value &&
			typeof (value as Record<string, unknown>).strIngredient12 === "string" &&
			"strIngredient13" in value &&
			typeof (value as Record<string, unknown>).strIngredient13 === "string" &&
			"strIngredient14" in value &&
			typeof (value as Record<string, unknown>).strIngredient14 === "string" &&
			"strIngredient15" in value &&
			typeof (value as Record<string, unknown>).strIngredient15 === "string" &&
			"strIngredient16" in value &&
			typeof (value as Record<string, unknown>).strIngredient16 === "string" &&
			"strIngredient17" in value &&
			typeof (value as Record<string, unknown>).strIngredient17 === "string" &&
			"strIngredient18" in value &&
			typeof (value as Record<string, unknown>).strIngredient18 === "string" &&
			"strIngredient19" in value &&
			typeof (value as Record<string, unknown>).strIngredient19 === "string" &&
			"strIngredient20" in value &&
			typeof (value as Record<string, unknown>).strIngredient20 === "string" &&
			"strMeasure1" in value &&
			typeof (value as Record<string, unknown>).strMeasure1 === "string" &&
			"strMeasure2" in value &&
			typeof (value as Record<string, unknown>).strMeasure2 === "string" &&
			"strMeasure3" in value &&
			typeof (value as Record<string, unknown>).strMeasure3 === "string" &&
			"strMeasure4" in value &&
			typeof (value as Record<string, unknown>).strMeasure4 === "string" &&
			"strMeasure5" in value &&
			typeof (value as Record<string, unknown>).strMeasure5 === "string" &&
			"strMeasure6" in value &&
			typeof (value as Record<string, unknown>).strMeasure6 === "string" &&
			"strMeasure7" in value &&
			typeof (value as Record<string, unknown>).strMeasure7 === "string" &&
			"strMeasure8" in value &&
			typeof (value as Record<string, unknown>).strMeasure8 === "string" &&
			"strMeasure9" in value &&
			typeof (value as Record<string, unknown>).strMeasure9 === "string" &&
			"strMeasure10" in value &&
			typeof (value as Record<string, unknown>).strMeasure10 === "string" &&
			"strMeasure11" in value &&
			typeof (value as Record<string, unknown>).strMeasure11 === "string" &&
			"strMeasure12" in value &&
			typeof (value as Record<string, unknown>).strMeasure12 === "string" &&
			"strMeasure13" in value &&
			typeof (value as Record<string, unknown>).strMeasure13 === "string" &&
			"strMeasure14" in value &&
			typeof (value as Record<string, unknown>).strMeasure14 === "string" &&
			"strMeasure15" in value &&
			typeof (value as Record<string, unknown>).strMeasure15 === "string" &&
			"strMeasure16" in value &&
			typeof (value as Record<string, unknown>).strMeasure16 === "string" &&
			"strMeasure17" in value &&
			typeof (value as Record<string, unknown>).strMeasure17 === "string" &&
			"strMeasure18" in value &&
			typeof (value as Record<string, unknown>).strMeasure18 === "string" &&
			"strMeasure19" in value &&
			typeof (value as Record<string, unknown>).strMeasure19 === "string" &&
			"strMeasure20" in value &&
			typeof (value as Record<string, unknown>).strMeasure20 === "string"
		) {
			return true;
		}
		return false;
	}