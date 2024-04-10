const factorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else if (n <0){
        
        return "number cannot be negative"
    }else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result = result *i;
        }
        return result;
    }
};

console.log(factorial(-4));