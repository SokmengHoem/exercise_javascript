let employees = ["Lara", "Evee", "Simi"];
let salary = [1000, 2000, 120.90];

// Check if both arrays have the same length

if (employees.length === salary.length) {
    console.log("===>List all employees<===")
    console.log("\tName \tSalary")
    for (let i = 0; i < employees.length; i++) {
        console.log(`\t${employees[i]}  | ${salary[i]}$`);
    }
} else {
    console.log("Error: Number of employees does not match number of salaries.");
}
