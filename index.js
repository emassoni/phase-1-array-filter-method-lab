function findMatching(array,string){
    const newArray = array.filter(function(element){
        return element.toLowerCase() === string.toLowerCase();
    });
    return newArray;
}
function fuzzyMatch(array,string){
    const newArray = array.filter(function(element){
        return element.charAt(0) === string.charAt(0);

    });
    return newArray;
}
function matchName(array,string){
    const newArray = array.filter(function(element){
        return element.name === string;
    });
    return newArray;
}