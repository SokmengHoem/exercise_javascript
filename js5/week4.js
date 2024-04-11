
//ex1
// let colors = ["Red", "Blue", "Green"]

// const [one, two, three] = colors;

// console.log(one);
// console.log(three);

//ex2
// const person =  {name: "Alice", age: 25, job: "Developer"}

// const {name, age, job} = person;

// console.log(name);
// console.log(age)

//ex3
// const user = { id: 1, name: "Sok", address: {street: "123 Main St", city: "PP"}}

// const {id, name, address:{street, city}} = user;

// console.log(street);
// console.log(city);

//ex4
// let nums1 = [1, 2, 3]
// let nums2 = [4, 5, 6]

// let result = nums1.concat(nums2);

// console.log(result);

//use  spread operator (...)
// let nums1 = [1, 2, 3,10]
// let nums2 = [4, 5, 6]

// let result = [...nums1, ...nums2];

// console.log(result);

//ex5

// const sumAll = (...nums) =>{
//   let result = 0;
//   for (let i = 0; i < nums.length; i++) {
//     result += nums[i];
//   }
//   console.log(result);
// }

// sumAll(1, 2, 3, 4,5);

//ex6
// let points = [{x: 1, y:2}, {x:2, y:3}, {x:3, y:4}, {x:5, y:5}]

// let firstPoint = points[0]

// let otherPoints = points.slice(1)
// console.log(firstPoint) 
// console.log(otherPoints) 

//or
// const points = [{x: 1, y:2}, {x:2, y:3}, {x:3, y:4}, {x:5, y:5}];
// const [firstPoint, ...otherPoints] = points;

// console.log(firstPoint); 
// console.log(otherPoints); 

//ex7
function filterProps(obj, ...propsToFilter) {
    const filteredObj = { ...obj };
    
    propsToFilter.forEach(prop => {
      delete filteredObj[prop];
    });
    
    return filteredObj;
}
  
  const object = { a: 1, b: 2, c: 3, d: 4 , e: 5};
  const filteredObject = filterProps(object, "b", "d");
  console.log(filteredObject); 
  