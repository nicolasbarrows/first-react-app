//Take in array of objects and filter them by "type".
export function filterJokesByType(list, jokeType) {
    if (jokeType==="") {
        return list;
    } else {
    let newList = list.filter(joke => joke.type === jokeType);
    return newList;
    }
}

//Takes in an array (of objects) and an object property.
//Create a new array of all of the unique values of that property.
export function getListOf(list, prop) {
    const newList = list.map((x) => x[prop]);
    const newSet = [...new Set(newList)];
    return newSet;
}