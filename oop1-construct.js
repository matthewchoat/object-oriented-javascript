//1. Create a Class called WhyClass.  This class should have one property, and two methods.  THe property is called "purpose", and stores a string.  This string should clearly explain why classes are used in Object Oriented Programming.  The first method is called explain().  This method should print the contents stored in the purpose 'field' of the class.  The second method is called pieces().  This 2nd method should print out the various parts that are essential to building a class.  Instantiate the class, and invoke the method so the results are showing in the console once this file is run.

//your code here...
class WhyClass {
    constructor(purpose) { this.purpose = purpose };
    explain() { console.log(this.purpose) }
    pieces() { console.log('The various parts that are essential to building a class include:'), console.log('class name: Make sure to include a capital as the first letter'), console.log('constructor: allows a new instance of this class to be executed using the "new" command.'), console.log('methods: these are bits of code, such as functions, that exist within a class as a child object and can be executed using the classinstance.methodname() syntax.') };
}

let whyoop = new WhyClass("Classes are useful in Javascript to make it easier to implement Object Oriented Programming concepts such as encapsulation (class objects have specfic variables and methods that can't be changed from outside the class.) and abstraction (since classes act as templates with predefined data and methods, we can hide complexity in our code by creating instances of classes to use for various tasks, instead of writing everything together as a single function. Classes also allow use to reuse code by simply creating a new instance of the class and giving it the specific properties you want.");

whyoop.explain();
whyoop.pieces();


/*2. You are exploring the rainforests of the Amazon.  You have observed many different types of wildlife on your excursion.  To jog your memory, some different types of wildlife that you observed are found in the following URL : https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species.  Feel free to use other resources online if you wish.

Create a class that can categorize at least 6 of the creatures that you recall observing the Amazon.  Each creature should have 3 unique characteristics, and 2 unique actions that it can do. */


//your code here...
class Amazon {
    constructor(name, family, food, weight) {
        this.name = name;
        this.family = family;
        this.food = food;
        this.weight = weight;
    }

    about() {
        console.log(`${this.name} belongs to the ${this.family} familiy and lives in the Amazon rainforest. It weighs ${this.weight} pounds.`);
    }

    sound() {
        console.log(`${this.name} makes a noise.`);
    }

    eat() {
        console.log(`${this.name} eats ${this.eat}.`);
    }
}

class Capybara extends Amazon {
    constructor(name, family, food, weight) {
        super(name, family, food, weight);
    }

    about() {
        console.log(`${this.name} belongs to the ${this.family} familiy and lives in the Amazon rainforest. He weighs ${this.weight} pounds.`);
    }

    sound() {
        console.log(`${this.name} snorts.`);
    }

    eat() {
        console.log(this.name + ' eats up to eight pounds of ' + this.food + ' per day!');
    }
}

let c = new Capybara('Clyde the Capybara', 'mammal', 'grass', 120);
c.about();
c.sound();
c.eat();

class PygmyMarmoset extends Amazon {
    constructor(name, family, food, weight) {
        super(name, family, food, weight);
    }

    about() {
        console.log(`${this.name} is the smallest member of the ${this.family} family and lives in the Amazon rainforest. She weighs only ${this.weight} ounces!`);
    }

    sound() {
        console.log(`${this.name} chirps and hoots.`);
    }

    eat() {
        console.log(this.name + ' eats a varied diet including ' + this.food + '.');
    }
}

let p = new PygmyMarmoset('Penny the Pygmy Marmoset', 'primate', 'Tree Sap, Fruit, Nuts, and Insects', 3.5);
p.about();
p.sound();
p.eat();

class SquirrelMonkey extends Amazon {
    constructor(name, family, food, weight) {
        super(name, family, food, weight);
    }

    about() {
        console.log(`${this.name} belongs to the ${this.family} familiy and lives in the Amazon basin. He weighs only ${this.weight} pounds.`);
    }

    sound() {
        console.log(`${this.name} hoots.`);
    }

    eat() {
        console.log(this.name + ' eats a diet consisting mainly of ' + this.food + '.');
    }
}

let s = new SquirrelMonkey('Saul the Squirrel Monkey', 'primate', 'fruits and insects', 2.4);
s.about();
s.sound();
s.eat();


class KingVulture extends Amazon {
    constructor(name, family, food, wingspan) {
        super(name, family, food);
        this.wingspan = wingspan;
    }

    about() {
        console.log(`${this.name} belongs to the ${this.family} familiy and lives high in the trees of the Amazon rainforest. His wingspan is ${this.wingspan} feet wide.`);
    }

    sound() {
        console.log(`${this.name} caws.`);
    }

    eat() {
        console.log(this.name + ', like other scavengers, keeps the forest floor clean by eating ' + this.food + '.');
    }
}

let k = new KingVulture('Kevin the King Vulture', 'bird', 'carrion', 7);
k.about();
k.sound();
k.eat();

class HyacinthMacaw extends Amazon {
    constructor(name, family, food, wingspan) {
        super(name, family, food);
        this.wingspan = wingspan;
    }

    about() {
        console.log(`${this.name} is the largest ${this.family} in the world and lives high in the trees of the Amazon rainforest. Her wingspan is ${this.wingspan} feet wide.`);
    }

    sound() {
        console.log(`${this.name} caws and speaks.`);
    }

    eat() {
        console.log(this.name + ' eats primarily ' + this.food + '.');
    }
}

let h = new HyacinthMacaw('Harmony the Hyacinth Macaw', 'parrot', 'fruit and nuts from native Amazonian Palms', 4.5);
h.about();
h.sound();
h.eat();


class BlackCaiman extends Amazon {
    constructor(name, family, food, weight) {
        super(name, family, food, weight);
    }

    about() {
        console.log(`${this.name} is the largest of the Amazonian ${this.family}s and lives in the Amazon rivers. He weighs up to ${this.weight} pounds!`);
    }

    sound() {
        console.log(`${this.name} is silent, but deadly.`);
    }

    eat() {
        console.log(this.name + ' eats a carnivorous diet and will eat just about ' + this.food + '!');
    }
}

let b = new BlackCaiman('Barry the Black Caiman', 'reptile', 'any land or river animals', 800);
b.about();
b.sound();
b.eat();


/*3. Convert the following Object Literals into a general class called Shape, and instantiate the class to generate the object literals
*/


class Shape {
    //your code here...
    constructor(name, sides, length, width, radius) {
        this.name = name;
        this.sides = sides;
        this.length = length;
        this.width = width;
        this.radius = radius;
    }

    calcTriangle() {
        let base = this.sides[0];
        let perimeter = ((base) + (this.sides[1]) + (this.sides[2])).toFixed(2);
        console.log(`${this.name}'s perimeter is calculated to be : ${perimeter}`);

        let p = (perimeter * .5);
        let area = (Math.sqrt(p * (p - base) * (p - this.sides[1]) * (p - this.sides[2]))).toFixed(2);
        console.log(`${this.name}'s area is calculated to be : ${area}`);

        let height = (2 * (area / base)).toFixed(2);
        console.log(`${this.name}'s height is calculated to be : ${height}`);
    }

    calcRectangle() {
        let perimeter = ((2 * this.length) + (2 * this.width)).toFixed(2);
        console.log(`${this.name}'s perimeter is calculated to be : ${perimeter}`)

        let area = (this.length * this.width).toFixed(2);
        console.log(`${this.name}'s area is calculated to be : ${area}`);
    }

    calcCircle() {
        let area = (Math.PI * this.radius ** 2).toFixed(2);
        console.log(`${this.name}'s area is calculated to be : ${area}`);

        let circumference = (2 * Math.PI * this.radius).toFixed(2);
        console.log(`${this.name}'s circumference is calculated to be : ${circumference}`)
    }

    calcPentagon() {
        let perimeter = (this.sides * 5).toFixed(2); //since all sides are equal, multiply one side by five to find perimeter of a pentagon
        console.log(`${this.name}'s perimeter is calculated to be : ${perimeter}`)

        let exterior = (360 / 5); //dividing 360 degrees by 5 (number of sides on pentagon) to find exterior angle degrees for each side
        let interior = (180 - exterior); //one hundred and eighty degrees minus the exterior angle to determine interior angle degrees for each side

        let triLength = (this.sides * .5).toFixed(2); //Pentagon divided into ten triangles. The length of one triangle's short leg is half of the pentagon's side.

        let acuteAngleShort = (360 / 10).toFixed(2); //acute angle opposite the short leg is 360 degrees divided by 10 right triangles

        let acuteAngleLong = (interior * .5).toFixed(2); //acute angle opposite the long leg is half of the interior angle

        let tangent = Math.tan(acuteAngleShort * Math.PI / 180); //determining tangent on the acute angle of one triangle's short side

        let height = (triLength / tangent).toFixed(2); //calculating height of one triangle by dividing the base by the tangent of the acute short angle.

        let triArea = (.5 * triLength * height); //finding the area of one triangle.

        let area = (triArea * 10).toFixed(2); //multiplying the area of one triangle by 10 to find the pentagon area.
        console.log(`${this.name}'s area is calculated to be : ${area}`);
    }

    calcHexagon() {
        let perimeter = (this.sides * 6).toFixed(2); //since all sides are equal, multiply one side by six to find perimeter of a hexagon
        console.log(`${this.name}'s perimeter is calculated to be : ${perimeter}`)

        let squareOfSide = this.sides ** 2; //finding the square of one side to aide in calculating hexagon area.

        let area = ((3 * (Math.sqrt(3)) / 2) * (squareOfSide)); //multiplying three by the square root of three and dividing that by two to get next area calculation. Multiply this value by the square root of one side to find the area of a hexagon.

        console.log(`${this.name}'s area is calculated to be : ${area.toFixed(2)}`);
    }

    calcOctagon() {
        let perimeter = (this.sides * 8).toFixed(2); //since all sides are equal, multiply one side by eight to find perimeter of a octagon
        console.log(`${this.name}'s perimeter is calculated to be : ${perimeter}`)

        let squareOfSide = this.sides ** 2; //finding the square of one side to aide in calculating octagon area.

        let area = ((2 * (1 + Math.sqrt(2))) * (squareOfSide)); //multiplying two by the square root of three plus one to get next area calculation. Multiply this value by the square root of one side to find the area of an octagon.

        console.log(`${this.name}'s area is calculated to be : ${area.toFixed(2)}`);
    }
}

let t = new Shape("Triangle", [4, 7, 7], null, null, null)
t.calcTriangle();
console.log(t);

let r = new Shape("Rectangle", null, 2, 5, null)
r.calcRectangle();
console.log(r);

let c = new Shape("Circle", 1, null, null, 5)
c.calcCircle();
console.log(c);

let p = new Shape("Pentagon", 4, null, null, null)
p.calcPentagon();
console.log(p);

let h = new Shape("Hexagon", 12, null, null, null)
h.calcHexagon();
console.log(h);

let o = new Shape("Octagon", 5, null, null, null)
o.calcOctagon();
console.log(o);


/*********************************************** 
Bonus Exercises:

//4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.  Add in  comments explaining the formulas for calculating the perimeter and the areas of these 3 shapes.  Also, as noted above, if you use the formula to calculate the height of the triangle instead of hard coding it, you will also obtain the bonus for this exercise.  The dimensions for the triangle are already provided for you in the triangle object literal.

>>>>>>>>>>>>>SEE ABOVE FOR BONUS 4 CONTENT<<<<<<<<<<<<

//5. Below is a class Earth.  It is instantiated with a earth 'instance'.  Because there is only 1 known earth, we don't want multiple instances of earth.  Modify the class so the properties are usuable WITHOUT instantiating the class.

*/

class Earth {
    name;
    planetNum; //distance from the sun.  1-mercury, 2-venus, 3-earth, ...

    constructor(name, num) {
        this.name = name;
        this.planetNum = num;
    }

}

const earth = new Earth('earth', 3);
console.log(earth);




