//exercise1

// const takeArray = (arr) => {
//     const arrayNew = arr.filter(x => x.age >18)
//     return arrayNew;
// }


// let people = [
//     { name: "John", age: 18 },
//     { name: "Alice", age: 28 },
//     { name: "Bob", age: 35 }
// ];

// console.log(takeArray(people));

//exercise 2

// let num = [10, 2,1,2, 3, 4, 5, 4, 5,3];

// let uniqueNum = num.filter((x, index) => {
//     return num.indexOf(x) === index;
// });

// console.log(uniqueNum); 

//exercise 3

// let peoples = [
//         { name: "John", age: 18 },
//         { name: "Alice", age: 28 },
//         { name: "Bob", age: 35 }
//     ];

// let newArray = peoples.map((people) => {
//     return people.name;
// })

// console.log(newArray);

//exercise 4
// let dates = ["2024-01-01", "2024-02-02", "2024-04-04"];

// let transformedDates = dates.map(dateString => {
//     let [year, month, day] = dateString.split('-');
//     return `${day}/${month}/${year}`;
// });

// console.log(transformedDates);

//exercise 5

// let numbers = [10, 500, 20, 8, 15];

// let maxNumber = numbers.reduce((max, current) => 
    
//     (current >max ) ? current : max
// );

// console.log(maxNumber);


//exercise 6
const items = [
    { name: "Bread", category: "Grocery" },
    { name: "Butter", category: "Grocery" },
    { name: "Shampoo", category: "Personal Care" }
  ];
  
  const groupedByCategory = items.reduce((acc, item) => {
    // If the category array doesn't exist, create it
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    // Push the name to the corresponding category array
    acc[item.category].push(item.name);
    return acc;
  }, {});
  
  console.log(groupedByCategory);
  