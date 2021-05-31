//Driver

//A driver can be initialized with a name, and a string
//representing the day that he joined Scuber. Add the following methods and attributes to the class:
//startDate — returns a JavaScript Date object. You'll need to use your Googling skills to reference some documentation on how dates work in JavaScript!
//yearsExperienceFromBeginningOf — takes an argument of a year and returns the number of years since the driver's startDate. (hint: when creating a new date object, you may want to refer to MDN's documentation on JS's Date object, specifically how to get a date at the beginning of the year)

//Route

//A route is initialized with two arguments,
//a beginningLocation and an endingLocation. Both of these arguments are JavaScript objects with an attributes of horizontal and vertical.
//blocksTravelled — returns an integer with the number of blocks travelled. In New York City, to travel East and West you cross avenues, and to travel North and South you cross streets. To calculate the distance of in streets, you can use subtraction (eg. 13th street to 10th street is three blocks). To calculate the distance of avenues travelled, you will need to know the names and order of avenues in New York City. You can use the following array to help with your calculation:
//let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
//So to travel from 15th Street and 1st Avenue to 20th Street and Lexington Avenue is to travel eight blocks (five blocks North and three blocks West).
//estimatedTime — The method returns the number of minutes estimated for the trip. The estimated time depends on the distance in blocks and whether the
// trip is occurring during peak hours or off peak hours. During off peak hours, a driver travels three blocks in a minute, while during peak hours a driver travels an estimated two blocks in a minute.

const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue',
 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
    constructor (name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate);
    }
    yearsExperienceFromBeginningOf (year) {
       return (year - this.startDate.getFullYear());
    }
}

class Route {
  constructor(beginningLocation, endingLocation) {
      this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }


blocksTravelled() {
    let startHorizontal = eastWest.indexOf(this.beginningLocation.horizontal);
        let endHorizontal = eastWest.indexOf(this.endingLocation.horizontal);
        return Math.abs(startHorizontal - endHorizontal) + Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    }
    estimatedTime(peakHours = false) {
        return peakHours ? this.blocksTravelled() / 2  : this.blocksTravelled() / 3 ;
    }
}
