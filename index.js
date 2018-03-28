
/*
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
*/

class Driver {
  constructor (name, joined) {
    this.name = name;
    this.joined = joined;
    this.startDate = new Date(joined);
  }
  yearsExperienceFromBeginningOf(year){
    this.year = year;
    return this.year - this.startDate.getFullYear();
  };
};

//let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']`

class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;

  }
  blocksTravelled() {
    return (this.endingLocation['vertical'] - this.beginningLocation['vertical']) +
    (this.beginningLocation['horizontal'].indexOf(" ") - this.endingLocation['horizontal'].indexOf(" "));
  }
  estimatedTime(peak) {
    if(peak){
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
};

/*
`estimatedTime` —  The method returns the number of minutes estimated for the trip.  The estimated time depends on the
distance in blocks and whether the trip is occurring during peak hours or off peak hours.
During off peak hours, a driver travels three blocks in a minute, while during peak hours a driver travels an estimated
two blocks in a minute.
*/
