const obj = {
    name: 'John',
    age: 30
};

console.log(obj.gender)//Output : undefined

// for (let key in obj) {
//     console.log(key + ': ' + obj[key]);
// }

// Object.keys(obj).forEach(key => {
//     console.log(key + ': ' + obj[key]);
// });

// for (let key of Object.keys(obj)) {
//     console.log(key + ': ' + obj[key]);
// }