const repeat = (array) => {
    if (array && array.length) {
        let repeatedArray = [];
        for (let i = 0; i < 3; i++) {
            repeatedArray.push(array); 
        }
        return repeatedArray;
    } else {
        return [];
    }
}

const reformat = (string) => {
    if (string) {
        const vowels = "aeiou"
        let caseFormattedString = string.toLowerCase().charAt(0).toUpperCase() + string.toLowerCase().slice(1);
        return caseFormattedString.replace(/[aeiou]/ig,'');
    } 
    return "";
}

const next_binary_number = (array) => {
    // check if array has no 0's
    if (!array.includes(0)) {
        //creates array with 1 more lentgh and fills with 0's [1,1] => [1,0,0]
        let response = new Array(array.length + 1).fill(0);
        response[0] = 1;
        return response;
    } else {
        let response = array
        for (let i = 0; i < array.length; i++) {
            if (array[array.length - i] === 0) {
                //changes last 0 to 1
                response[array.length - i] = 1;
                //changes right cells to 0
                response.fill(0, array.length - i + 1, array.length);
                break;
            }
        }
        return response
    }    
}

console.log("Copy array test1: " + repeat([1, 2, 3]));
console.log("Copy array test2: " + repeat([]));
console.log("Copy array test3: " + repeat([], 0));
console.log(reformat("liMeSHArp DeveLoper TEST"));
console.log(reformat(""));
console.log("[1, 1]: " + next_binary_number([1,0]));
console.log("[1, 0, 0]: " + next_binary_number([1,1]));
console.log("[1, 1, 1]: " + next_binary_number([1,1,0]));
console.log("[1,0,0,0,0,0,0,0,1,0]: " + next_binary_number([1,0,0,0,0,0,0,0,0,1]));