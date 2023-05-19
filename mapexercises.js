//doubleValues


function doubleValuesWithMap(arr) {
    return arr.map(function(value) {
        return value * 2;

    });
}
doubleValuesWithMap([1,2,3]) // [2,4,6]
doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]

//valTimesIndex
function valTimesIndex(arr) {
    return arr.map(function(value, index) {
        return value * index;
    });
}

//extractKey
function extractKey(arr, key) {
    return arr.map(function(value){
        return value.name;
    });
}

//extractFullName



function extractFullName(arr) {
    return arr.map(function(value) {
        let firstName = value.first;
        let lastName = value.last;
        return firstName + ' ' + lastName;
    });
}

extractFullName([
  {first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia"},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele"}
])


