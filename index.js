let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    let currentYear = new Date(year, 0, 1);
    let totalYears = (currentYear - this.startDate) / (1000 * 60 * 60 * 24 * 365);
    return parseInt(totalYears);
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let horizontalTravel = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
    let verticalTravel = Math.abs(parseInt(this.beginningLocation.vertical, 10) - parseInt(this.endingLocation.vertical, 10))
    return horizontalTravel + verticalTravel;
  }

  estimatedTime(peakTime) {
    if (peakTime) {
        return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
