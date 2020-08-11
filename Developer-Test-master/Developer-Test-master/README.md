# Limesharp Developer Test

Please, **don't fork this repo**, clone it or download it locally and then commit changes after each task into a new repo of your own, and send us the link. We will get back to you shortly. 

Languages accepted: Javascript or PHP. 

### Task 1: 
Make this work (repeat 3 times the contents of an array):
```javascript
repeat([1,2,3]) //[1,2,3,1,2,3,1,2,3]
```
Your solution:
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
###### If we type in our console your function and repeat([1,2,3]) then the result should be [1,2,3,1,2,3,1,2,3] 

### Task 2:
Make this work (no vowels, lowercase except the first letter):
```javascript
reformat("liMeSHArp DeveLoper TEST") //Lmshrp dvlpr tst
```
Your solution:
const reformat = (string) => {
    if (string) {
        const vowels = "aeiou"
        let caseFormattedString = string.toLowerCase().charAt(0).toUpperCase() + string.toLowerCase().slice(1);
        return caseFormattedString.replace(/[aeiou]/ig,'');
    } 
    return "";
}
###### If we type in our console your function and reformat("liMeSHArp DeveLoper TEST") then the result should be Lmshrp dvlpr tst


### Task 3 (optional, for bonus points):
Make this work (without using any built in functions, only a `for` loop, return the next binary number in a string or as an array)
```javascript
next_binary_number([1,0]) // [1,1]

// possible test cases:
// [1,0] => [1,1]
// [1,1] => [1,0,0]
// [1,1,0] => [1,1,1]
// .......
// [1,0,0,0,0,0,0,0,0,1] => [1,0,0,0,0,0,0,0,1,0]
```
Your solution:
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
###### If we type in our console your function and next_binary_number([1,0,0,0,0,0,0,0,0,1]) then the result should look like 1,0,0,0,0,0,0,0,1,0 (or as an array).

---

If you get invited to the first interview read the "What to expect.md" file.