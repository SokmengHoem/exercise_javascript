
function storePduct (obj) {
    for(let i = 0; i < obj.length; i++) {
        if(obj[i].quantity > 0) {
            console.log(obj[i])
        }
    }
}



let products = [
    {
        name: "iPhone",
        price: 1000,
        quantity: 10
    },
    {
        name: "Samsung",
        price: 2000,
        quantity: 0
    },
    {
        name: "Sony",
        price: 3000,
        quantity: 30
    }
]

storePduct(products);
