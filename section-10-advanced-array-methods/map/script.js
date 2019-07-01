Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@jefferylgraham 
0
0 0 jefferylgraham/advanced-web-developer-bootcamp
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Security  Insights  Settings
advanced-web-developer-bootcamp/section-10-advanced-array-methods/map/script.js
@jefferylgraham jefferylgraham add map exercises
5f6dc06 30 minutes ago
61 lines (49 sloc)  1.84 KB
    
// function map(arr, callback) {
//   var newArr = [];
//   for(var i = 0; i < arr.length; i++) {
//     newArr.push(callback(arr[i], i, arr));
//   }
//   return newArr;
// }

/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([1,-2,-3]) // [2,-4,-6]
*/

function doubleValues(arr){
    return arr.map(function(value) {
      return value * 2;
    });
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    return arr.map(function(value, index) {
      return value * index;
    });
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.
Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    return arr.map(function(value) {
      return value[key];
    });
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    return arr.map(function(value) {
      return value.first + " " + value.last;
    });
}

