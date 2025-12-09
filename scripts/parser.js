// below is a script to automate the process of translating json objects to ts interfaces.

function parse(json) {
    const parsed = {};
    for(key in json) {
        if(typeof json[key] === "string") {
            parsed[key] = "string";
        } else if(json[key] == null) {
            parsed[key] = "unknown";
        }
    }
    return parsed;
}

// below is a script that help automate the process of creating custom type guards.

function makeGuard(schema) {
    let requirements = `if(typeof value === "object" && value !== null &&`;
    for(key in schema) {
        let keyStr = String(key);
        requirements = `${requirements} "${keyStr}" in value &&`;
        let valueStr = String(schema[key]);
        requirements = `${requirements} typeof (value as any).${keyStr} === "${valueStr}" &&`;
    }
    return requirements;
}

console.log(
    makeGuard(
        {
            "idMeal": "string",
            "strMeal": "string",
            "strMealAlternate": "unknown",
            "strCategory": "string",
            "strArea": "string",
            "strInstructions": "string",
            "strMealThumb": "string",
            "strTags": "string",
            "strYoutube": "string",
            "strIngredient1": "string",
            "strIngredient2": "string",
            "strIngredient3": "string",
            "strIngredient4": "string",
            "strIngredient5": "string",
            "strIngredient6": "string",
            "strIngredient7": "string",
            "strIngredient8": "string",
            "strIngredient9": "string",
            "strIngredient10": "string",
            "strIngredient11": "string",
            "strIngredient12": "string",
            "strIngredient13": "string",
            "strIngredient14": "string",
            "strIngredient15": "string",
            "strIngredient16": "string",
            "strIngredient17": "string",
            "strIngredient18": "string",
            "strIngredient19": "string",
            "strIngredient20": "string",
            "strMeasure1": "string",
            "strMeasure2": "string",
            "strMeasure3": "string",
            "strMeasure4": "string",
            "strMeasure5": "string",
            "strMeasure6": "string",
            "strMeasure7": "string",
            "strMeasure8": "string",
            "strMeasure9": "string",
            "strMeasure10": "string",
            "strMeasure11": "string",
            "strMeasure12": "string",
            "strMeasure13": "string",
            "strMeasure14": "string",
            "strMeasure15": "string",
            "strMeasure16": "string",
            "strMeasure17": "string",
            "strMeasure18": "string",
            "strMeasure19": "string",
            "strMeasure20": "string",
            "strSource": "string",
            "strImageSource": "unknown",
            "strCreativeCommonsConfirmed": "unknown",
            "dateModified": "unknown",
        }
    )
)