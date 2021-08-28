'use strict';

class Person {
    
    constructor (name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }

    calcBMI() {
        return this.weight / this.height ** 2;
    }

}

const mark = new Person("Mark", 1.69, 78);
const john = new Person("John", 1.95, 92);

console.log(`BMI information Mark ${mark.calcBMI()}, John ${john.calcBMI()}. Is Mark's BMI more ? ${mark.calcBMI() > john.calcBMI()}`);