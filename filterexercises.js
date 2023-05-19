//filterByValue

function filterByValue(arr, key) {
    return arr.filter(item => 
        item.hasOwnProperty('isCatOwner')
    )};


//find
find([1,2,3,4,5], 3) // 3
//find([1,2,3,4,5], 10) // undefined

function find(arr, value) {
    return arr.filter(function(element) {
        return element === value;
    });
};
//findInObj...need help

function findInObj(arr, key, value) {
    const objectsFound = arr.filter(function(obj) {
        return obj.hasOwnProperty(key) && obj[key] === value;
    });
    return objectsFound.length > 0 ? objectsFound[0] : undefined;
};

//removeVowels

function removeVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    return str
        .split('')
        .filter(function(char) {
            return !vowels.includes(char);
        })
        .join('')
        .toLowerCase();
}

//doubleOddNumbers
function doubleOddNumbers(arr) {
    const filteredArray = arr.filter
    (num => num % 2 !== 0);
    const mappedArray = filteredArray.map(num => num * 2);
    return mappedArray;
}


 