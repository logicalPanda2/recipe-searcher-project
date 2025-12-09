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