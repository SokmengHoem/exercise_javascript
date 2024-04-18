
// const array = [10,50,30, 20, 40];
// console.log(array.find(element => element>50));

// 
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     // Abstract method
//     makeSound() {
//         throw new Error('Method "makeSound" must be implemented.');
//     }
// }

// class Dog extends Animal {
//     makeSound() {
//         return 'Woof!';
//     }
// }

// class Cat extends Animal {
//     makeSound() {
//         return 'Meow!';
//     }
// }

// const dog = new Dog('Buddy');
// console.log(dog.name + ': ' + dog.makeSound()); // Output: Buddy: Woof!

// const cat = new Cat('Whiskers');
// console.log(cat.name + ': ' + cat.makeSound()); // Output: Whiskers: Meow!

// class Car {
//     constructor(make, model) {
//         this._make = make; // Private variable conventionally denoted with underscore
//         this._model = model;
//     }

//     // Public method to get make
//     getMake() {
//         return this._make;
//     }

//     // Public method to get model
//     getModel() {
//         return this._model;
//     }
// }

// const myCar = new Car('Toyota', 'Camry');
// console.log(myCar.getMake()); // Output: Toyota
// console.log(myCar.getModel()); // Output: Camry


// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     // Abstract method
//     makeSound() {
//         throw new Error('Method "makeSound" must be implemented.');
//     }
// }

// class Dog extends Animal {
//     makeSound() {
//         return 'Woof!';
//     }
// }

// class Cat extends Animal {
//     makeSound() {
//         return 'Meow!';
//     }
// }
// const dog = new Dog('Buddy');
// console.log(dog.name + ': ' + dog.makeSound()); // Output: Buddy: Woof!

// const cat = new Cat('Whiskers');
// console.log(cat.name + ': ' + cat.makeSound()); // Output: Whiskers: Meow!

// class Shape {
//     constructor(type) {
//         this.type = type;
//     }
//     // Abstract method
//     calculateArea() {
//         throw new Error('Abstract method calculateArea() must be implemented.');
//     }
// }
// class Circle extends Shape {
//     constructor(radius) {
//         super('circle');
//         this.radius = radius;
//     }

//     calculateArea() {
//         return Math.PI * this.radius ** 2;
//     }
// }
// class Rectangle extends Shape {
//     constructor(width, height) {
//         super('rectangle');
//         this.width = width;
//         this.height = height;
//     }

//     calculateArea() {
//         return this.width * this.height;
//     }
// }

// const circle = new Circle(5);
// const rectangle = new Rectangle(4, 6);

// console.log(circle.calculateArea()); // Output: ~78.54
// console.log(rectangle.calculateArea()); // Output: 24

// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Child class inheriting from Animal
class Dog extends Animal {
    constructor(name) {
        super(name); // Call the constructor of the parent class
    }

    // Override the speak method
    speak() {
        console.log(`${this.name} barks.`);
    }
}

// Child class inheriting from Animal
class Cat extends Animal {
    constructor(name) {
        super(name); // Call the constructor of the parent class
    }

    // Override the speak method
    speak() {
        console.log(`${this.name} meows.`);
    }
}

// Creating instances of Dog and Cat
const dog = new Dog('Buddy');
const cat = new Cat('Whiskers');

// Calling the speak method
dog.speak(); // Output: Buddy barks.
cat.speak(); // Output: Whiskers meows.
