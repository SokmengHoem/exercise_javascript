
// let pm = new Promise((resolve, reject) => {
//     resolve("Hello it is successfully");
//     reject("Error");
// });

// pm.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// Simulate an asynchronous function that fetches data after 2 seconds
// function fetchData(url) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const data = {
//           message: "I am the fetched data",
//         };
//         resolve(data);
//       }, 2000);
//     });
//   }

// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let num = true;
//     if(num){
//         resolve(10);
//     }else{
//         reject(new Error("Failed to get num"));
//     }
//     }, 2000);
// });

// p.then((result) => {
//     console.log(result); // Output: 10
//     return result * 2;
// }).then((result) => {
//     console.log(result); // Output: 20
//     return result * 3;
// }).then((result) => {
//     console.log(result); // Output: 60
//     return result * 4;
// }).catch(error => {
//     console.log(error); 
// });

const fetchData = (isFail) => {
    return new Promise ((resolve, reject) => {
         
        setTimeout(() => {
            if (!isFail) {
                reject(new Error("Failed to fetch data"));
            } else {
                resolve("data");
            }
        })
    },200)
}

fetchData(true).then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
});