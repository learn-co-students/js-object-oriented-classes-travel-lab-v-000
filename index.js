let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 1, 1);
    let totalYears = (endDate - this.startDate) / (365 * 24 * 60 * 60 * 1000);
    return parseInt(totalYears);
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  } // each argument is an object that has horizontal and vertical key/value pair properties

  avenueNameToIntegerIndex(avenueName) {
    return eastWest.indexOf(avenueName);
  }

  blocksTravelled() {
    let horizontalDistance = this.avenueNameToIntegerIndex(this.endingLocation.horizontal) - this.avenueNameToIntegerIndex(this.beginningLocation.horizontal)
    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical
    return (Math.abs(horizontalDistance) + Math.abs(verticalDistance))
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled()/2;
    } else {
      return this.blocksTravelled()/3;
    }
  }
}





// In JS, the first month (January) is month number 0
// Date objects are based on a time value that is the number of milliseconds since 1 January 1970
