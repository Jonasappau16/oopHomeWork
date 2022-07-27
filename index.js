// Create a Basic JavaScript Object

// let Cat ={
//     name: "Ryan",
//     numLegs: 2,
// };



let cat ={
    name: "Ryan",
    numLegs: 2,
};

// Use Dot Notation to Access the Properties of an Object
 console.log (cat.name);
 console.log (cat.numLegs);

//  Create a Method on an Object
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs:function() {
     return "This dog has " + dog.numLegs + " legs.";
    }
  };
  dog.sayLegs();


//   Define a Constructor Function
  
// Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. 

// Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
// Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
// Constructors define properties and behaviors instead of returning a value as other functions might.

function Dog() {
    this.name = "Spence";
    this.color = "blue";
    this.numLegs = 4;
  }

//   Use a Constructor to Create Objects

function Dog() {
    this.name = "Spence";
    this.color = "blue";
    this.numLegs = 4;
  }
//   NOTE: this inside the constructor always refers to the object being created.

let peter = new Dog;

// Extend Constructors to Receive Arguments

function Dog(name,color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }
     let terrier = new Dog("George", "White");

    //  Verify an Object's Constructor with instanceof

    function House(numBedrooms) {
        this.numBedrooms = numBedrooms;
      }
            let myHouse = new House(4);
      myHouse instanceof House;


    //   Understand Own Properties

    function Bird(name) {
        this.name = name;
        this.numLegs = 2;
      }
      
      let canary = new Bird("Tweety");
      let ownProps = [];
      // Add your code below this line
      for (let property in canary) {
        if (canary.hasOwnProperty(property)) {
          ownProps.push(property);
        }
      }


    //   Use Prototype Properties to Reduce Duplicate Code


    function Dog(name) {
        this.name = name;
      }
      
      Dog.prototype.numLegs = 4;
      
      // Add your code above this line
      let beagle = new Dog("Snoopy");