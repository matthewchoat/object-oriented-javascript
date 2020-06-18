/* 1. Create a Abstract Creature class that is NOT allowed to be instantiated. Find a way to prevent this class from being instantiated with an instance.  In the Creature class, include two abstract methods.  move(), and act().  These methods are NOT allowed to be invoked from the Abstract class, so throw an error in these methods if they are invoked by any inherited sub-classes.  

Create at least 3 sub-classes that inherit from the Abstract Creature Class.  Example sub-classes are: 
-Human
-Dinosaur
-Bird
-Reptile
-Fish

These sub-classes MUST implement the abstract methods of move() and act(), which are found on the abstract Creature class. In addition to the 2 abstract methods, implement 1 unique method on each sub-class.  Also, each sub-class MUST have at least 2 unique property fields on them.  Example property fields are:
-name
-weight
-food
-age

*/
'use strict';

class Creature {
    #locationx;
    #locationy;
    #currentAction;

    constructor() {
        if (this.constructor === Creature) {
            throw new Error('Cannot instanciate abstract class');
        }
    }

    move(locationx, locationy) {
        throw new Error('Abstract method. Please implement the move method within a subclass.');
    }

    act(action) {
        throw new Error('Abstract method. Please implement the act method within a subclass.');
    }
}

class Werewolf extends Creature {
    #name;
    #locationx;
    #locationy;
    #currentAction;
    #fullMoon;
    #hunger;

    constructor(name, locationx, locationy, currentAction) {
        super(locationx, locationy, currentAction)
        this.#name = name;
        this.#locationx = locationx;
        this.#locationy = locationy;
        this.#currentAction = currentAction;
    }

    move(locationx, locationy) {
        this.#locationx = locationx;
        this.#locationy = locationy;

        console.log(`${this.#name} has moved to the following coordinates: longitude ${locationx} degrees, latitude ${locationy} degrees.`)
    }

    act(action) {
        this.#currentAction = action;

        console.log(`${this.#name} ${this.#currentAction}.`)
    };

    transform(fullMoon) {
        this.#fullMoon = fullMoon;
        { this.#fullMoon === true ? (this.#hunger = "thirsting", console.log(`The full moon causes ${this.#name} to transform into a hideous werewolf ${this.#hunger} for fresh meat.`)) : console.log(`The sun rises and ${this.#name} transforms back into a human. The nightmare is over, for now.`) }
    }

    feed(hungry, food) {
        { hungry === true ? (this.#hunger = "full", console.log(`${this.#name} is ravenous and finds a ${food} to temporarily satiate his bloodlust.`)) : console.log(`${this.#name} is still full from the last meal and lets the ${food} go.`) }
    }
}

class Vampyre extends Creature {
    #name;
    #age;
    #title;
    #locationx;
    #locationy;
    #currentAction;

    constructor(name, age, title, locationx, locationy, currentAction) {
        super(locationx, locationy, currentAction)
        this.#name = name;
        this.#age = age;
        this.#title = title;
        this.#locationx = locationx;
        this.#locationy = locationy;
        this.#currentAction = currentAction;
    }

    move(locationx, locationy) {
        this.#locationx = locationx;
        this.#locationy = locationy;

        console.log(`${this.#name} transforms into a giant bat and flys to a house at the following coordinates: longitude ${locationx} degrees, latitude ${locationy} degrees.`)
    }

    act(action) {
        this.#currentAction = action;

        console.log(`${this.#name}, ${this.#title}, has lived for ${this.#age} years. ${this.#name} ${this.#currentAction}.`)
    };

    mesmer(victim) {
        console.log(`${this.#name} arrives through an unlocked window and swiftly mesmerizes ${victim} and drinks her blood. ${victim} awakens the next day to find two tiny marks on her neck and no memory of how they got there, except for an inkling desire to go back to see the ${this.#title}.`)
    }
}

class Mummy extends Creature {
    #name;
    #plagues;
    #throneroom;
    #locationx;
    #locationy;
    #currentAction;

    constructor(name, plagues, throneroom, locationx, locationy, currentAction) {
        super(locationx, locationy, currentAction)
        this.#name = name;
        this.#plagues = plagues
        this.#throneroom = throneroom;
        this.#locationx = locationx;
        this.#locationy = locationy;
        this.#currentAction = currentAction;
    }

    move(locationx, locationy) {
        this.#locationx = locationx;
        this.#locationy = locationy;

        console.log(`${this.#name}'s undead army moves across Egypt to the following coordinates, bringing plagues and pestilence with them ${locationx} degrees, latitude ${locationy} degrees.`)
    }

    act(action, hero) {
        this.#currentAction = action;

        console.log(`${this.#name} manifests back inside the throneroom just as the looter was leaving. ${hero} aligns several special mirrors around the room to reflect the peeking sunlight. Just as the mummy ${this.#currentAction} onto the hero, he explodes into millions of pieces. The curse is lifted, for now.`)
    };

    lootThrone(looter) {
        console.log(`${looter} loots ${this.#name}'s throneroom and can carry out up to $${this.#throneroom} worth of treasure. ${looter} also finds a strange moonstone egg. Who knows what secrets it may hold?`);
    };

    release(archeologist) {
        console.log(`${archeologist} hurriedly pries open the coffin. Suddenly, ${this.#name} breaks free and fills the tomb with ice cold mist. ${archeologist} knows he has awakened the cursed mummy. He and his collegues are then devoured by a plague of ${this.#plagues}, never to be seen again.`)
        return this.#plagues
    }
}


//abstractClass instance below will return an error if commented out. Meaning it is an abstract class.
//let abstractClass = new Creature();
let marty = new Werewolf("Marty Wolf", 0, 0, null);

marty.transform(true);

//if you comment out the "act" method in the Werewolf class, the line below will return the 'abstract method' error.
marty.act("howls at the moon");

//if you comment out the "move" method in the Werewolf class, the line below will return the 'abstract method' error.
marty.move(224, 114);

marty.feed(true, "small, wild hog");
marty.move(260, 102);

marty.feed(false, "live subway rat");

marty.transform(false);

let vlad = new Vampyre("Vlad Dracula", "an unknown number", "Count of Transylvania", 0, 0, null);
vlad.act("entertains the denizens of his manor, carefully observing the ballroom to select tonight's victim.");
vlad.move(311, 241);
vlad.mesmer("Julia Luis Dreyfus");

let imhotep = new Mummy("Imhotep, He Who Comes in Peace", ['flies', 'beatles', 'locusts', 'snakes'], 42000000, 0, 0, null);
imhotep.release("Professor Niles");

imhotep.move(311, 241);
imhotep.lootThrone("Brendan Frasier")

imhotep.act("descends", "Brendan Frasier");




/*
2. For the following Person class, modify the class methods, so the sub-class methods will successfully fire.  For the Teacher method, a set of methods have already been set up.  For the Student class, it will be up to you to determine how to set up the methods to fire in the Student sub-class.  :
*/

class Person {
    name;

    eat() {
        console.log(this.name + " is eating");
    }

    sleep() {
        console.log(this.name + " is sleeping");
    }

    code() {
        console.log(this.name + " is coding");
    }

    repeat() {
        console.log(this.name + " is repeating the above steps, yet another time");
    }

    explain() {
        //this function should contain a console.log() explaining what you had to do to get the correct functions to work, and the reasoning behind what you did.
        console.log("This problem requires understanding the concepts of polymorphism. These methods were not consistent on their field types for the parent or child classes and required me to use method overriding to call new methods within the subclasses that have the same name as the super class. For example, there were regular methods, functions, and arrow functions as methods all within this class. This was causing them to sometimes be undefined when called by a subclass, or just not return the correct string when called.");
    }

}


class Teacher extends Person {

    //refactor the methods in this Teacher class, so all of these methods override the methods in the Person super class.  

    constructor(name) {
        super(name);
        this.name = name;
    }

    eat() {
        console.log(this.name + " loves to teach before eating");
    }

    sleep() {
        console.log(this.name + " sleeps after preparing the lesson plan");
    }

    code() {
        console.log(this.name + " codes first, then teaches it the next day.");
    }

    repeat() {
        console.log(this.name + " teaches, codes, eats, sleeps, and repeats");
    }
}


class Student extends Person {

    constructor(name) {
        super(name);
        this.name = name;
    }
    //set up your methods in this student class, so all of these methods will override the methods from the super class.

    //eat method should print out - <stduent name> studies, then eats

    eat() {
        console.log(this.name + " studies and then eats.");
    }

    //sleep method should print out, <student name> studies coding so much, that they dream about it in their sleep

    sleep() {
        console.log(this.name + " studies coding so much, they dream about it when they actually do sleep!");
    }

    //code method should print out, <student name> was first overwhelmed by coding, but kept at it, and now has become a coding guru!

    code() {
        console.log(this.name + " was first overwhelmed by coding, but kept going, and is now becoming a coding guru!");
    }

    //repeat method should print out, <student name> keeps on studying, coding, eating, and sleeping, and puts it all on repeat.  

    repeat() {
        console.log(this.name + " keeps on studying, coding, eating, and sleeping, and puts it all on repeat.");
    }
}

const teacher = new Teacher("Amir");

teacher.explain();

const student = new Student("Matthew");

student.explain();

teacher.eat();
teacher.sleep();
teacher.code();
teacher.repeat();

student.eat();
student.sleep();
student.code();
student.repeat();


//****************************************************************************************************************************************************************************************   
//Bonus Exercise:

//3. Consider the following class:


class Cook {

    prepare(food1, food2, food3) {
        console.log("The cook is cooking " + food1 + ', ' + food2 + ', ' + 'and ' + food3 + '.');
    }

    // prepare = function () {
    //     console.log('The cook is cooking');
    // }

    explain = () => {
        console.log("The 'prepare' function was overriding the prepare method when called because they share the same name. We can do just about anything to stop this override, including changing the name of the prepare function, deleting it, or commenting it out. ");
    }

}

const cook = new Cook();

cook.prepare("turkey", "salami", "pizza");

cook.explain();


