// this is a script to automate the process of translating json objects to ts interfaces.

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