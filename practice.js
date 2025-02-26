  //  SHALLOW COPY

  console.log("Shallow Copy");

let shallowArr = [1,2,3,4,5,6,7,8,9,10];

let newShallowArr = shallowArr;

console.log("Arr=>", shallowArr);
console.log("NewArr=>", newShallowArr);

console.log("Modifying newArr");

newShallowArr[0] = 100;

console.log("Arr=>", shallowArr);
console.log("NewArr=>", newShallowArr);

// DEEP COPY

console.log("Deep Copy");

let deepArr = [1,2,3,4,5,6,7,8,9,10];

let newDeepArr = JSON.parse(JSON.stringify(deepArr));

console.log("Arr=>", deepArr);
console.log("NewArr=>", newDeepArr);

console.log("Modifying newDeepArr");

newDeepArr[0] = 100;

console.log("Arr=>", deepArr);
console.log("NewArr=>", newDeepArr);