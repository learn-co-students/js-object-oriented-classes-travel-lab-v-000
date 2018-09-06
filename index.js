
// A driver can be initialized with a name, and a string representing the day that he joined Scuber.
// yearsExperienceFromBeginningOf — takes an argument of a year and returns the number of years since the driver's startDate.

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(currentYear) {
    const year = this.startDate.getFullYear();
    return (currentYear - `${year}`) - 1;
  }
}

// route is initialized with two arguments, a beginningLocation and an endingLocation. Both of these arguments are JavaScript objects with an attributes of horizontal and vertical.
//
// blocksTravelled — returns an integer with the number of blocks travelled. In New York City, to travel East and West you cross avenues, and to travel North and South you cross streets.
let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor (begin, end) {
    this.begin = begin;
    this.end = end;
  }

  byAvenue(integer) {
    return eastWest.indexOf(integer);
  }

  blocksTravelled(horizontal, vertical) {
    const horzDist = (this.byAvenue(this.end.horizontal)) - (this.byAvenue(this.begin.horizontal));

    const vertDist = (this.end.vertical) - (this.begin.vertical);

    return Math.abs(horzDist + vertDist);
  }

  // estimatedTime — The method returns the number of minutes estimated for the trip. The estimated time depends on the distance in blocks and whether the trip is occurring during peak hours or off peak hours.
  // During off peak hours, a driver travels three blocks in a minute, while during peak hours a driver travels an estimated two blocks in a minute.

  estimatedTime(peakHour) {
    if (peakHour) {
      return this.blocksTravelled() / 2;
    }
    else {
      return this.blocksTravelled() / 3;
    }
  }
}
