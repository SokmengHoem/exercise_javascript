function findPrime(n) {
    if (n <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }
    
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            return false; // If n is divisible by any number, it's not prime
        }
    }
    
    return true; // If none of the above conditions matched, n is prime
}

for (let i = 1; i <= 100; i++) {
    if (findPrime(i)) {
        console.log(i);
    }
}
 