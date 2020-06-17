/* 
1. Create the following classes:
    - Book class. It should have an author and publisher property.
    - Author class. It should have a name and books property.
    - Publisher class.  It should have an authors and books property.
    - Review class.  It should have a rating and user property.
    -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".  Create methods that return the values of these private variables in case other pieces of the code need to access the data of the 4 classes.  Also create methods that allow outside code to "set" new values for the properties on the classes, without directly manipulating the values themselves. 

    //your code here...
*/

// HEAVY CHANGES WERE MADE TO THESE CLASSES TO ACCOMODATE FOR BONUS FUNCTIONALITY. SEE FURTHER COMMENTS FOR  EXPLANATIONS OF CHANGES.

class Book {
    #title = '';
    #author;
    #publisher;
    #review;
    #checkedout = false;

    constructor(title, author, publisher, review) {
        this.#title = title;
        this.#author = author;
        this.#publisher = publisher;
        this.#review = review;
    };

    getTitle() {

        // ANY COMMENTED OUT LINES WERE USED FOR TESTING PURPOSES. MOST OF THE CONSOLE.LOG PRINT FUNCTIONALITY FOR THESE CLASSES HAS BEEN MOVED TO #3 BONUS SECTION AT THE END OF THIS EXERCISE.

        // console.log(`Book: ${this.#title}`);
        return this.#title;
    };

    getAuthor() {
        // console.log(`Written by: ${this.#author.getBooks()}`);
        return this.#author;
    };

    getPublisher() {
        // console.log(`Published by: ${this.#publisher}`)
        return this.#publisher;

    }

    getReview() {
        return this.#review;

    }

    setCheckout() {
        this.#checkedout = true;
        // console.log(`You have checked out ${this.#title}.`);
        // console.log(`Book checked out?: ${this.#checkedout}`);
    }

    setReturn() {
        this.#checkedout = false;
        // console.log(`You have returned ${this.#title}, thank you!`);
        // console.log(`Book checked out?: ${this.#checkedout}`);
    }
}

class Author {
    #name = '';
    // #books = '';

    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
    // getBooks() {
    //     console.log(`Books by ${this.#name}:`);
    //     console.log(this.#books);
    //     return this.#books;
    // }

    // setBooks(newbooks) {
    //   this.#books = newbooks;
    //   console.log(`Books by ${this.#name} have been updated:`);
    //   console.log(this.#books);
    // }
}

class Publisher {
    #name = '';
    #authors = [];
    #books = [];
    #takingNewAuthors = false;

    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    addAuthor(author) {
        this.#authors.push(author);
    }
    getAuthors() {
        // console.log(`${this.#name} proudly publishes the following authors:`);
        // console.log(this.#authors);
        return this.#authors;
    }

    addBook(book) {
        this.#books.push(book);
    }
    getBooks() {
        // console.log(`${this.#name} proudly publishes the following books:`);
        // console.log(this.#books);
        return this.#books;
    }

    setHiring() {
        this.#takingNewAuthors = true;
        // console.log(`${this.#name} is now accepting submissions for new authors, apply today!`);
        // console.log(`Publisher looking for new talent?:`);
        // console.log(this.#takingNewAuthors)
    }
}

class Review {
    #ratings;
    #userRatings;
    #level;

    constructor(ratings, userRatings, level) {
        this.#ratings = ratings;
        this.#userRatings = userRatings;
        this.#level = level;
    }

    addRatings(rating) {
        this.#ratings.push(rating);
    }

    getRatings() {
        // console.log(`${this.#name} has an average critic review score of ${this.#rating} out of 5 stars.`);
        return this.#ratings;
    }

    addUserRatings(user) {
        this.#userRatings.push(user);
    }

    getUserRatings() {
        // console.log(`${this.#name} has an average criting review score of ${this.#rating} out of 5 stars.`);
        return this.#userRatings;
    }

    addReadingLevel(readingLevel) {
        this.#level = readingLevel;
    }

    getLevel() {
        // console.log(`${this.#name}'s suggested reading level is ${this.#level}.`);
        return this.#level;
    }

}
//COMMENTING OUT THE INSTANCES AND EXAMPLES. MOST HAVE BEEN MOVED TO #3 BONUS.

// let neverwhere = new Book('Neverwhere', new Author('Neil Gaiman', ['Neverwhere']), 'Dark Horse');
// neverwhere.getTitle();
// neverwhere.getAuthor();
// neverwhere.getPublisher();
// neverwhere.setCheckout();
// neverwhere.setReturn();

// let tor = new Publisher("Tor Books", ["Orson Scott Card", "Robert Jordan", "Frank Herbert", "Brian Herbert"], ["Ender's Game", "Speaker for the Dead", "Dune", "Children of Dune", "The Wheel of Time"]);
// tor.getAuthors();
// tor.getBooks();
// tor.setHiring();

// let georgeOrwell = new Author('George Orwell', ["1984", "Animal Farm"]);
// georgeOrwell.getBooks();
// georgeOrwell.setBooks(["1984", "Animal Farm", "Homage to Catalonia"]);
// let houseofleaves = new Review("House of Leaves", 4, "Twelth Grade");
// houseofleaves.getRating();
// houseofleaves.getLevel();
// houseofleaves.setUser(5);


// 2. Create the following classes:
//Umbrella class.  It should have a an organization name.  It should only have a single instance.  Umbrella is the "Parent Organization" e.g. Allegis Group
//Company class. It should have a compnay name and # of employees.  Create at least 3 different companies that are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek, etc.)
//Site class. It should have the name of the company, and the location of the site.  It is a child class that inherits from the Company class.  Create 3 sites for each company.
//Employee class. It should have a employee name, job title, and salary properties. Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.

//For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense, considering what the classes are supposed to be representing.


//your code here...
class Umbrella {
    #umbrellaName;
    #tagline;
    #stockPrice;
    constructor(umbrellaName, tagline) {
        this.#umbrellaName = umbrellaName;
        this.#tagline = tagline;
    }
    sayTagline() {
        console.log(`${this.#umbrellaName}: "${this.#tagline}"`)
    }
    setStockPrice(share) {
        this.#stockPrice = share;
        console.log(`${this.#umbrellaName}'s stock is valued at $${this.#stockPrice} per share.`);
    }

}

//Umbrella Instance
let lendelGlobal = new Umbrella("Lendel Global", "We're in Everything!");

//Calling Umbrella Methods
lendelGlobal.sayTagline();
lendelGlobal.setStockPrice(208);

class Company extends Umbrella {
    #companyName;
    #numEmployees;
    #umbrellaName;
    #numRentals;
    #topic;
    #date;
    #students;

    constructor(companyName, numEmployees, umbrellaName) {
        super(umbrellaName)
        this.#umbrellaName = umbrellaName,
            this.#companyName = companyName,
            this.#numEmployees = numEmployees
    }

    shoutUmbrella() {
        console.log(`${this.#companyName} is proudly owned and managed by ${this.#umbrellaName} and currently has ${this.#numEmployees} employees.`);

        return this.#umbrellaName;
    }

    rentalsAvailable(numAvailable) {
        this.#numRentals = numAvailable;
        console.log(`${this.#companyName} currently has ${this.#numRentals} for rental. Only slightly used!`);

    }

    scheduleTraining(trainTopic, trainDate, numStudents) {
        this.#topic = trainTopic;
        this.#date = trainDate;
        this.#students = numStudents;

        console.log(`The 3 day office training at ${this.#companyName}, "${this.#topic}", has been scheduled to start on ${this.#date} with a class size of ${this.#students} students. See you then!`);
    }
}
//Company Instances
let tinyHats = new Company("Tim's Tiny Hat Emporium", 115, "Lendel Global");
let discountClowns = new Company("Denny's Discount Clown Rental", 234, "Lendel Global");
let businessHugs = new Company("Business Hugs, Ltd.", 110);

//Calling Company Methods
tinyHats.shoutUmbrella();
discountClowns.shoutUmbrella();
discountClowns.rentalsAvailable("13 clowns");
businessHugs.shoutUmbrella();
businessHugs.scheduleTraining("Forget the Office Handshake! Hug it Out!", "August 8th, 2020", 12);

class Site extends Company {
    #siteLoc;
    #companyName;
    #numEmployees;
    #umbrellaName;
    #siteOpen;
    #siteClose;
    #offices;
    #floatHoliday;

    constructor(siteLoc, companyName, numEmployees, umbrellaName) {
        super(companyName, numEmployees, umbrellaName)
        this.#siteLoc = siteLoc;
        this.#companyName = companyName;
    }

    setOpen(openTime) {
        this.#siteOpen = openTime;
        console.log(`The ${this.#siteLoc} location of ${this.#companyName} opens at ${this.#siteOpen}.`);
    }

    setClose(closeTime) {
        this.#siteClose = closeTime;
        console.log(`The ${this.#siteLoc} location of ${this.#companyName} closes at ${this.#siteClose}. You don't have to go home, but you can't stay here!`);
    }

    setOffices(space) {
        this.#offices = space;
        console.log(`The ${this.#siteLoc} location of ${this.#companyName} currently has ${this.#offices} offices available for new employees.`);
    }

    setFloatHoliday(date) {
        this.#floatHoliday = date;
        console.log(`The ${this.#siteLoc} location of ${this.#companyName} has a floating holiday scheduled for ${this.#floatHoliday}.`);
    }
}

//Site Instances
let phlugerville = new Site('Phlugerville, TX', "Tim's Tiny Hat Emporium", 36, "Lendel Global");
let shanghai = new Site('Shanghai, China', "Tim's Tiny Hat Emporium", 38, "Lendel Global");
let seattle = new Site('Seattle, WA', "Tim's Tiny Hat Emporium", 37, "Lendel Global");

let dubai = new Site('Dubai, India', "Denny's Discount Clown Rental", 113, "Lendel Global");
let raleigh = new Site('Raleigh, NC', "Denny's Discount Clown Rental", 52, "Lendel Global");
let norfolk = new Site('Norfolk, VA', "Denny's Discount Clown Rental", 69, "Lendel Global");

let paris = new Site('Paris, France', "Business Hugs, Ltd.", 33, "Lendel Global");
let dallas = new Site('Dallas, TX', "Business Hugs, Ltd.", 35, "Lendel Global");
let losangeles = new Site('Los Angeles, CA', "Business Hugs, Ltd.", 42, "Lendel Global");

//Calling Site Methods
phlugerville.setOpen("9:00 A.M., Monday through Friday");
shanghai.setClose("6:00 P.M., Monday through Friday, Closed Saturday and Sunday");
dubai.setOffices(14);
losangeles.setFloatHoliday('December 24th');

class Employee extends Site {
    #empName;
    #jobTitle;
    #salary;
    #siteLoc;
    #companyName;
    #numEmployees;
    #umbrellaName;

    constructor(empName, jobTitle, salary, siteLoc, companyName, numEmployees, umbrellaName) {
        super(siteLoc, companyName, numEmployees, umbrellaName)
        this.#empName = empName;
        this.#jobTitle = jobTitle;
        this.#salary = salary;
    }
}

/****************************************************************************************************************************************************************************************
Bonus Exercise:

3. Building on Exercise 1, Do the following :
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/

//your code here...

class Bookstore {
    #books = [];

    constructor() {
    }

    addBook(book) {
        this.#books.push(book);
    }
    getBooks() {
        return this.#books;
    }
    searchBooksByTitle(name) {
        return this.#books.filter(title => title.getTitle() === name)
    }
}

let barnesnnoble = new Bookstore();

let gaiman = new Author('Neil Gaiman');
let markdz = new Author('Mark Z. Danielewski');
let fherbert = new Author('Frank Herbert');
let rjordan = new Author('Robert Jordan');
let gorwell = new Author('George Orwell');

let darkHorse = new Publisher("Dark Horse");
let pantheon = new Publisher("Pantheon Books");
let tor = new Publisher("Tor Books");
let penguin = new Publisher("Penguin Group");

let nevReview = new Review(["3 out of 5 stars"], "Mostly Positive", "Ninth Grade");
let godsReview = new Review(["4 out of 5 stars"], "Overwhelmingly Positive", "Tenth Grade");
let holReview = new Review(["2 out of 5 stars"], "Overwhelmingly Positive", "Twelth Grade");
let nineReview = new Review(["4 out of 5 stars"], "Mostly Positive", "Ninth Grade");
let animalReview = new Review(["5 out of 5 stars"], "Mixed", "Tenth Grade");
let wheelReview = new Review(["3 out of 5 stars"], "Overwhelmingly Positive", "Eighth Grade");
let duneReview = new Review(["2 out of 5 stars"], "Mostly Positive", "Eleventh Grade");

let neverwhere = new Book('Neverwhere', gaiman, darkHorse, nevReview);
let americanGods = new Book('American Gods', gaiman, darkHorse, godsReview);
let houseofleaves = new Book('House of Leaves', markdz, pantheon, holReview);
let nineteeneightyfour = new Book('1984', gorwell, penguin, nineReview);
let animalfarm = new Book('Animal Farm', gorwell, penguin, animalReview);
let wheeloftime = new Book('The Wheel of Time', rjordan, tor, wheelReview);
let dune = new Book('Dune', fherbert, tor, duneReview);

darkHorse.addAuthor(gaiman);
darkHorse.addBook(neverwhere);
darkHorse.addBook(americanGods);
pantheon.addAuthor(markdz);
pantheon.addBook(houseofleaves);
tor.addAuthor(rjordan);
tor.addAuthor(fherbert);
tor.addBook(wheeloftime);
tor.addBook(dune);
penguin.addAuthor(gorwell);
penguin.addBook(nineteeneightyfour);
penguin.addBook(animalfarm);


barnesnnoble.addBook(neverwhere);
barnesnnoble.addBook(americanGods);
barnesnnoble.addBook(houseofleaves);
barnesnnoble.addBook(nineteeneightyfour);
barnesnnoble.addBook(animalfarm);
barnesnnoble.addBook(wheeloftime);
barnesnnoble.addBook(dune);


console.log("The following books are available at Barnes and Noble Bookstore:");
barnesnnoble.getBooks().forEach(book => console.log("Title: " + book.getTitle() + ", Author: " + book.getAuthor().getName() + ", Publisher: " + book.getPublisher().getName() + ", Critic Reviews: " + book.getReview().getRatings() + ", User Reviews: " + book.getReview().getUserRatings() + ", Reading Level: " + book.getReview().getLevel()));

let searchedBook = barnesnnoble.searchBooksByTitle('American Gods');
console.log(searchedBook.title);
