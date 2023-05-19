
const arr = [1, 2, 3];
function doubleValues(arr) {
    const doubled = [];
    arr.forEach((item) => {
        doubled.push(item * 2);
    });
    return doubled;
};
const answer = doubleValues(arr);
console.log(answer);

//onlyEvenValues
const newArray = [];
const notArray = [];
onlyEvenValues([1,2,3]) // [2]
onlyEvenValues([5,1,2,3,10]) // [2,10]

function onlyEvenValues(arr) {   
    arr.forEach((item) => {
        if (item % 2 === 0) {
            newArray.push(item);
        } else {
            notArray.push(item);
        };
         
    });
    return newArray;  
};
console.log(newArray);

//showFirstAndLast
const newArray1 = [];
//showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
//showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

function showFirstAndLast(arr) {
    arr.forEach((word) => {
       const firstAndLast = word[0] + word[word.length-1]
       newArray1.push(firstAndLast);
    });
    return newArray1;
}
console.log(newArray1);

//addKeyAndValue
addKeyAndValue(
    [
      {name: 'Elie'},
      {name: 'Tim'},
      {name: 'Matt'},
      {name: 'Colt'}
    ],
      'title',
      'instructor'
    );

function addKeyAndValue(arr, key, value) {
    arr.forEach(obj => {
        obj[key] = value;
    });
    return arr;
};

const info =     [
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
  ];

const newInfo = addKeyAndValue(info, 'title', 'instructor');
console.log(newInfo);

//vowelCount

//vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}

function vowelCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const count = {};
    const lowCaseStr = str.toLowerCase();
    for (let i of lowCaseStr) {
        if (vowels.includes(i)) {
            if (count[i]) {
                count[i]++;
            } else {
               count[i] = 1; 
            }
        }
    }console.log(count);
    return count;
}


