let arr = [1,2,3,4,5,6,7,8,9,10];

let newArr = JSON.parse(JSON.stringify(arr));

console.log("Arr=>", arr);
console.log("NewArr=>", newArr);

console.log("Modifying newArr");

newArr[0] = 100;

console.log("Arr=>", arr);
console.log("NewArr=>", newArr);