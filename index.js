class Driver {
  constructor(name, string) {
    this.name = name;
    this.startDate = new Date(string);
  };

  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 0, 1);
    let totalYears = (endDate - this.startDate) / (365 * 24 * 60 * 60 * 1000);
    return parseInt(totalYears);
  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  avenueToInt(avenue) {
    return eastWest.indexOf(avenue);
  }

  blocksTravelled() {
    let horizontalDistance =
      this.avenueToInt(this.endingLocation.horizontal) -
      this.avenueToInt(this.beginningLocation.horizontal);
    let verticalDistance =
      this.endingLocation.vertical - this.beginningLocation.vertical;

    return Math.abs(horizontalDistance) + Math.abs(verticalDistance);
  }
  estimatedTime(duringPeak) {
    if (duringPeak) {
      return this.blocksTravelled() / 2;
    }
    else {
      return this.blocksTravelled() / 3;
    }
  }
}
