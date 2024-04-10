const obj = {
    name: 'John',
    age: 30
};

//console.log(obj.gender)//Output : undefined

// for (let key in obj) {
//     console.log(key + ': ' + obj[key]);
// }

// Object.keys(obj).forEach(key => {
//     console.log(key + ': ' + obj[key]);
// });

// for (let key of Object.keys(obj)) {
//     console.log(key + ': ' + obj[key]);
// }

// const person = {
//     firstName: "Bro",
//     lastName: "Json",
//     id: 5566,
//     fullName: function(age) {
//       return this.firstName + " " + this.lastName + " " + age;
//     }
//   };

//   console.log(person.fullName(23));
//   console.log(person["id"]);

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  const {a, b, c} = person;
  console.log(a)